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

    function createTokenURI(string memory _uri) public pure returns (string memory) {
        return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                "Eyescream",
                                '", "description":"Eyescream NFT!", "attributes":"", "image":"',_uri,'"}'
                            )
                        )
                    )
                )
            );
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
        console.log("-------------------------------------------");
        console.log("----------All requirements met-------------");
        for (uint i =0; i<= _quantity; i++ ) {
            string memory _imgURI = svgToUri(_svg);
            _safeMint(msg.sender, _tokenCounter.current());
            _setTokenURI(uint256(_tokenCounter.current()), createTokenURI(_imgURI));
            console.log("----------------------------------");
            _tokenCounter.increment();
            console.log(_tokenCounter.current());
            console.log("----------- Token minted ----------");
        }

    }

}

