// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721A__IERC721Receiver, IERC721A} from "./ERC721A/ERC721A.sol";

contract VoidersUpdated is ERC721A__IERC721Receiver, Ownable {
    address public deprecatedVoiders;
    address public newVoiders;

    constructor(address _deprecatedVoiders, address _newVoiders) {
        deprecatedVoiders = _deprecatedVoiders;
        newVoiders = _newVoiders;
    }

    function upgradeVoiders(uint256 _tokenId) external {
        IERC721A(deprecatedVoiders).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId
        );
        IERC721A(newVoiders).safeTransferFrom(
            address(this),
            msg.sender,
            _tokenId
        );
    }

    function setDeprecatedVoiders(address _deprecatedVoiders) external onlyOwner {
        deprecatedVoiders = _deprecatedVoiders;
    }

    function setNewVoiders(address _newVoiders) external onlyOwner {
        newVoiders = _newVoiders;
    }

    function emergencyWithdrawTokens(address _token, address _to, uint256 _id) external onlyOwner {
        IERC721A(_token).safeTransferFrom(address(this), _to, _id);
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes memory data
    ) public override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
