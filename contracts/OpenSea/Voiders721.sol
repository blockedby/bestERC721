// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./common/meta-transactions/ContentMixin.sol";
import "./common/meta-transactions/NativeMetaTransaction.sol";

contract OwnableDelegateProxy {}

/**
 * Used to delegate ownership of a contract to another address, to save on unneeded transactions to approve contract use for users
 */
contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

/**
 * @title ERC721Tradable
 * ERC721Tradable - ERC721 contract that whitelists a trading address, and has minting functionality.
 */
contract Voiders721 is ERC721, ContextMixin, NativeMetaTransaction, Ownable {
    using ECDSA for bytes32;
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    /**
     * We rely on the OZ Counter util to keep track of the next available ID.
     * We track the nextTokenId instead of the currentTokenId to save users on gas costs.
     * Read more about it here: https://shiny.mirror.xyz/OUampBbIz9ebEicfGnQf5At_ReMHlZy0tB4glb9xQ0E
     */
    Counters.Counter private _nextTokenId;

    address public immutable proxyRegistryAddress;
    address public immutable whitelistChecker;
    uint256 public constant maxTotalSupply = 888;
    uint256 public constant presalePrice = 0.25 ether;
    uint128 public immutable presaleStartTime;
    uint128 public immutable presaleEndTime;

    mapping(address => bool) public mintedFromWhitelist;

    string private _baseTokenURI;

    constructor(
        string memory _name,
        string memory _symbol,
        uint128 _presaleStartTime,
        address[] memory _developers,
        address _proxyRegistryAddress,
        address _treasury,
        address _whitelistChecker
    ) ERC721(_name, _symbol) {
        proxyRegistryAddress = _proxyRegistryAddress;
        // nextTokenId is initialized to 1, since starting at 0 leads to higher gas cost for the first minter
        _nextTokenId.increment();
        _initializeEIP712(_name);

        require(
            _whitelistChecker != address(0),
            "Whitelist checker cannot be 0"
        );
        whitelistChecker = _whitelistChecker;
        uint256 devCount = _developers.length;
        require(devCount == 28, "Incorrect number of developers");
        for (uint256 i = 0; i < devCount; i++) {
            address dev = _developers[i];
            require(dev != address(0), "Invalid developer address");
            _mintTo(dev);
        }
        require(_treasury != address(0), "Invalid treasury address");
        for (uint256 i = 0; i < 20; i++) {
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

    function _mintTo(address _to) internal {
        uint256 currentTokenId = _nextTokenId.current();
        _nextTokenId.increment();
        _safeMint(_to, currentTokenId);
    }

    function presaleMint(uint256 _numberOfTokens, bytes memory signature)
        external
        payable
    {
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
        require(
            totalSupply() + _numberOfTokens <= maxTotalSupply,
            "Exceeds max supply of tokens"
        );
        require(
            msg.value == presalePrice * _numberOfTokens,
            "Wrong amount of ETH"
        );
        mintedFromWhitelist[msg.sender] = true;
        for (uint256 i = 0; i < _numberOfTokens; i++) {
            _mintTo(msg.sender);
        }
    }

    function ownerMintForSell() external onlyOwner {
        uint256 numToMint = maxTotalSupply - totalSupply();
        require(block.timestamp > presaleEndTime, "Can sell only after presale");
        for (uint256 i = 0; i < numToMint; i++) {
            _mintTo(msg.sender);
        }
    }

    function changeBaseTokenURI(string memory _newBaseTokenURI)
        public
        onlyOwner
    {
        _baseTokenURI = _newBaseTokenURI;
    }

    /**
        @dev Returns the total tokens minted so far.
        1 is always subtracted from the Counter since it tracks the next available tokenId.
     */
    function totalSupply() public view returns (uint256) {
        return _nextTokenId.current() - 1;
    }

    function baseTokenURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    _baseTokenURI,
                    // Strings.toString(_tokenId),
                    "1.json"
                )
            );
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
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }
}
