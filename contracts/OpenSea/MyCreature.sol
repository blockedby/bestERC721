// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract MyCreature is ERC721Tradable {
    constructor()
        ERC721Tradable("Creature", "OSC", address(0))
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "ipfs://QmRn7cDx8gon5esi6xp6QvCDLAsQ9mawfbwmQRUQjK1sJV/";
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmQi2F99Dkg4comZzFvcXMrXrVqDeMoBLXp5vgZmo9VWbJ";
    }
}
