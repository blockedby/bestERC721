// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract MyCreature is ERC721Tradable {
    using ECDSA for bytes32;

    address public immutable whitelistChecker;
    uint256 public constant maxTotalSupply = 888;
    uint128 public immutable presealeStartTime;
    uint128 public constant presaleLength = 3 hours;

    // mapping(address => bool) public mintedFromWhitelist;

    receive() external payable {}

    constructor(
        address _proxyRegistryAddress,
        uint128 _presealeStartTime,
        address[] memory _developers,
        address _treasury,
        address _whitelistChecker
    ) ERC721Tradable("MyCreature", "CREATURE", _proxyRegistryAddress) {
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
            mintTo(dev);
        }
        require(_treasury == address(0), "Invalid treasury address");
        for (uint256 i = 0; i < 20; i++) {
            mintTo(_treasury);
        }
        presealeStartTime = _presealeStartTime;
    }

    // только одну сминтить можно или нет?
    function presaleMint(uint256 _numberOfTokens, bytes memory signature)
        public
        payable
    {
        require(
            keccak256(abi.encodePacked(msg.sender))
                .toEthSignedMessageHash()
                .recover(signature) == whitelistChecker,
            "You are not whitelisted"
        );
        require(
            block.timestamp >= presealeStartTime &&
                block.timestamp < presealeStartTime + presaleLength,
            "Presale has not started yet"
        );
        // require(
        //     !mintedFromWhitelist[msg.sender],
        //     "You are already minted from whitelist"
        // );
        require(
            totalSupply() + _numberOfTokens <= maxTotalSupply,
            "Exceeds max supply of tokens"
        );
        for (uint256 i = 0; i < _numberOfTokens; i++) {
            mintTo(msg.sender);
        }
    }

    function baseTokenURI() public pure override returns (string memory) {
        return "ipfs://QmRn7cDx8gon5esi6xp6QvCDLAsQ9mawfbwmQRUQjK1sJV/";
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmQi2F99Dkg4comZzFvcXMrXrVqDeMoBLXp5vgZmo9VWbJ/";
    }
}
