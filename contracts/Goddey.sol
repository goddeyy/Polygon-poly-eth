// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Goddey is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("Goddey", "GDY") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "A utopian city where skyscrapers are intertwined with giant trees, and solar-powered waterfalls cascade down vertical gardens",
        "A mythical beast that blends the ferocity of a wolf, the elegance of a phoenix, and the fluidity of a manta ray",
        "An abstract portrayal of the human mind, with swirling colors and fractal patterns representing thoughts, emotions, and memories",
        "A magical gathering of woodland creatures sharing stories and laughter around a campfire under a starlit sky",
        "A surreal scene of a time traveler navigating through a kaleidoscope of historical moments, with ancient civilizations and futuristic societies merging into one"
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmQFn1Sufk1cmSFWo7VxH9uirTdTJLU37g9segU3rQKwaD";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid Address");
        require(totalSupply() < limit, "Maximum NFT Minted");
        _safeMint(reciever, quantity);
    }

    function promtDescription(
        uint256 tokenId
    ) public view returns (string memory) {
        return descriptions[tokenId];
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert("No Token Exists");

        string memory baseURI = _baseURI();
        string memory tokenIdStr = _toString(tokenId);
        string memory extension = ".png";
        return
            bytes(baseURI).length != 0
                ? string(abi.encodePacked(baseURI, "/", tokenIdStr, extension))
                : "";
    }
}
