// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./OpenSea/common/meta-transactions/ContentMixin.sol";
import "./OpenSea/common/meta-transactions/NativeMetaTransaction.sol";

contract OwnableDelegateProxy {}

/**
 * Used to delegate ownership of a contract to another address, to save on unneeded transactions to approve contract use for users
 */
contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

/**
 * @title VoidersGenesis
 * is ERC721Tradable-compatible contract.
 */
contract VoidersGenesis is
    ERC721,
    ContextMixin,
    NativeMetaTransaction,
    Ownable
{
    using ECDSA for bytes32;
    using Counters for Counters.Counter;

    Counters.Counter private _nextTokenId;

    address public immutable proxyRegistryAddress;
    address public immutable whitelistChecker;
    uint256 public constant maxTotalSupply = 888;
    uint256 public constant presalePrice = 0.25 ether;
    uint128 public immutable presaleStartTime;
    uint128 public immutable presaleEndTime;
    string private _baseTokenURI;
    string private _contractURI;

    mapping(address => bool) public mintedFromWhitelist;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        string memory _newContractURI,
        uint128 _presaleStartTime,
        address _treasury,
        address _whitelistChecker,
        address _proxyRegistryAddress
    ) ERC721(_name, _symbol) {
        _baseTokenURI = _baseURI;
        _contractURI = _newContractURI;
        proxyRegistryAddress = _proxyRegistryAddress;
        _nextTokenId.increment();
        _initializeEIP712(_name);

        require(
            _whitelistChecker != address(0),
            "Whitelist checker cannot be 0"
        );
        whitelistChecker = _whitelistChecker;
        require(_treasury != address(0), "Invalid treasury address");
        for (uint256 i = 0; i < 25; i++) {
            _mintTo(_treasury);
        }
        presaleStartTime = _presaleStartTime;
        presaleEndTime = _presaleStartTime + 3 hours;
    }

    /**
     * @dev Mints a token to an address with a tokenURI.
     * @param _to address of the future owner of the token
     */
    function mintTo(address _to) public onlyOwner {
        _mintTo(_to);
    }

    /**
     * @dev Mints a token to an approved address with discount.
     * @param signature of whitelisted address from whitelist checker
     */
    function presaleMint(bytes memory signature) external payable {
        require(
            keccak256(abi.encodePacked(msg.sender))
                .toEthSignedMessageHash()
                .recover(signature) == whitelistChecker,
            "You are not whitelisted"
        );
        require(
            block.timestamp >= presaleStartTime &&
                block.timestamp < presaleEndTime,
            "Presale is not active"
        );
        require(
            !mintedFromWhitelist[msg.sender],
            "You are already minted from whitelist"
        );
        require(msg.value == presalePrice, "Wrong amount of ETH");
        mintedFromWhitelist[msg.sender] = true;
        _mintTo(msg.sender);
    }

    /**
     * @dev Mints the rest of the tokens to owner for selling.
     */
    function ownerMintForSell() external onlyOwner {
        require(
            block.timestamp > presaleEndTime,
            "Can sell only after presale"
        );
        uint256 numToMint = maxTotalSupply - totalSupply();
        for (uint256 i = 0; i < numToMint; i++) {
            _mintTo(msg.sender);
        }
    }

    /**
     * @dev Changes baseTokenURI.
     * @param _newBaseTokenURI new URI for all tokens
     */
    function changeBaseTokenURI(string memory _newBaseTokenURI)
        public
        onlyOwner
    {
        _baseTokenURI = _newBaseTokenURI;
    }

    /**
     * @dev Changes baseTokenURI.
     * @param _newContractURI new URI for all tokens
     */
    function changeContractURI(string memory _newContractURI) public onlyOwner {
        _contractURI = _newContractURI;
    }

    /**
     * @dev Returns the total tokens minted so far.
     * 1 is always subtracted from the Counter since it tracks the next available tokenId.
     */
    function totalSupply() public view returns (uint256) {
        return _nextTokenId.current() - 1;
    }

    /**
     * @dev Returns contractURI.
     */
    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /**
     * @dev Returns baseTokenURI.
     */
    function baseTokenURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev Returns URI for exact token.
     * @param _tokenId uint256 ID of the token to query
     */
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return string(abi.encodePacked(_baseTokenURI));
    }

    /**
     * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
     */
    function isApprovedForAll(address owner, address operator)
        public
        view
        override
        returns (bool)
    {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

    /**
     * @dev Mints a token to an address with a tokenURI.
     * @param _to new URI for all tokens
     */
    function _mintTo(address _to) internal {
        require(totalSupply() < maxTotalSupply, "Exceeds max supply of tokens");

        uint256 currentTokenId = _nextTokenId.current();
        _nextTokenId.increment();
        _safeMint(_to, currentTokenId);
    }

    /**
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }
}