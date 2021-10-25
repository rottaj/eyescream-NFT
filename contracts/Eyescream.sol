pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";
import "hardhat/console.sol";

contract Eyescream is Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenCounter;
    
    uint256 public constant MAX_SUPPLY = 10101; // Total number of Eyescream tokens.
    uint256 public constant PRICE = 0.08 ether; 
    uint256 public constant MAX_PER_TX = 3;
    address private constant _owner = 0x5ab990103E453a55ACA6e458Fe9317B1F476d2B7;

    constructor() ERC721("Eyescream", "EYE") {}


    function svgToUri(string memory _svg) public pure returns (string memory) {
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(_svg))));
        return string(abi.encodePacked(baseURL,svgBase64Encoded));
    }

    function mint(string memory _svg, uint256 _quantity) external payable{ 
        require(_tokenCounter.current() < MAX_SUPPLY, "SOLD_OUT");
        require(_quantity > 0, "INVALID_AMOUNT");
        require(_quantity <= MAX_PER_TX, "SOLD_OUT");
        require(_tokenCounter.current() + _quantity <= MAX_SUPPLY, "SOLD_OUT");
        console.log("-------------Quantity-------------");
        console.log(_quantity);
        console.log("-------------msg.value-------------");
        console.log(msg.value);
        console.log("-------------msg.sender-------------");
        console.log(msg.sender);
        require(_quantity * PRICE == msg.value, "INVALID_ETHER");
        for (uint i =0; i<= _quantity; i++ ) {
            _tokenCounter.increment();
            _safeMint(msg.sender, _tokenCounter.current());
            string memory _tokenURI = svgToUri(_svg);
            _setTokenURI(_tokenCounter.current(), _tokenURI);
        }

    }

}

