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
    //uint256 public constant MAX_PER_TX = 3; // need to include quantity in mint function.
    address private constant _t1 = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;

    event BaseTokenURIChanged(string baseTokenURI);

    constructor() ERC721("Eyescream", "EYE") {}

    function totalAmount() public view returns (uint256) {
        return uint256(_tokenCounter.current());
    }

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
    

    function mint(string memory _svg) external payable {
        require(_tokenCounter.current() < MAX_SUPPLY, "SOLD OUT");
        require(_tokenCounter.current() + 1 <= MAX_SUPPLY, "SOLD OUT");
        require(msg.value == PRICE, "PRICE LIMIT NOT REACHED");
        string memory _imgURI = svgToURI(_svg);
        _safeMint(msg.sender, _tokenCounter.current());
        _setTokenURI(uint256(_tokenCounter.current()), createTokenURI(_imgURI));
        _tokenCounter.increment();
        }
    }


    // Withdrawal function
    function withDraw() external onlyOwner {
        uint _t1Amount = address(this).balance;
        require(payable(_t1).send(_t1Amount), "FAILED TO SEND TO T1");
    }

    function emergencyWithDraw() external onlyOwner {
        payable(_t1).transfer(address(this).balance);
    }

}

