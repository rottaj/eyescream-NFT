 pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Eyescream is Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenCounter;
    
    uint256 public constant MAX_SUPPLY = 10101; // Total number of Eyescream tokens.
    uint256 public constant PRICE = 0.08 ether; 
    uint256 public constant MAX_PER_TX = 3;
    address private constant _owner = 0x5ab990103E453a55ACA6e458Fe9317B1F476d2B7;

    constructor() ERC721("Eyescream", "EYE") {}

    function mint(string memory _svg) external payable{ 
        require(_tokenCounter.current() < MAX_SUPPLY);
        _safeMint(msg.sender, _tokenCounter.current());

    }

}

