pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "base64-sol/base64.sol";
import "hardhat/console.sol";

contract Eyescream is ERC721Enumerable, Ownable{
    using Counters for Counters.Counter;
    using Strings for uint256;    
    uint256 public constant MAX_SUPPLY = 10101; // Total number of Eyescream tokens.
    uint256 public constant PRICE = 0.08 ether; 
    uint256 public constant MAX_PER_TX = 3;

    // Team addresses
    address private constant _t1 = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;

    string private _baseTokenURI;
    string private _baseContractURI;

    Counters.Counter private tokenSupply;

    // Events
    event BaseTokenURIChanged(string URI);
    event BaseContractURIChanged(string URI);

    mapping (address => uint256) _totalClaimed;

    constructor() ERC721("Eyescream", "EYE") {}

    function mint(uint256 _quantity) external payable {
        //require(totalSupply() < MAX_SUPPLY, "SOLD OUT");
        //require(totalSupply() + _quantity <= MAX_SUPPLY, "SOLD OUT");
        require(tokenSupply.current() < MAX_SUPPLY, "SOLD OUT");
        require(tokenSupply.current() + _quantity <= MAX_SUPPLY, "SOLD OUT");
        require(_quantity > 0, "AMOUNT CANNOT BE ZERO");
        require(_quantity <= MAX_PER_TX, "AMOUNT EXCEEDED PER TXN");
        require(msg.value == (_quantity * PRICE), "PRICE LIMIT NOT REACHED");
        for (uint256 i=0; i<=_quantity; i++) {
            //uint256 currentToken = uint256(totalSupply()) + 1;
            //_safeMint(msg.sender, currentToken);
            tokenSupply.increment();
            _safeMint(msg.sender, tokenSupply.current());
            _totalClaimed[msg.sender] += 1;
        }
    }

    function getSupply() public view  returns (uint256) {
        return tokenSupply.current();
    }

    // Withdrawal function
    function withDraw() external onlyOwner {
        uint _t1Amount = address(this).balance;
        require(payable(_t1).send(_t1Amount), "FAILED TO SEND TO T1");
    }

    function emergencyWithDraw() external onlyOwner {
        payable(_t1).transfer(address(this).balance);
    }

    // URI Function

    function setBaseTokenURI(string memory _uri) external onlyOwner {
        _baseTokenURI = _uri;
        emit BaseTokenURIChanged(_uri);
    }

    function setBaseContractURI(string memory _uri) external onlyOwner {
        _baseContractURI = _uri;
        emit BaseContractURIChanged(_uri);
    }

    function tokenURI(uint256 _tokenId) public view override(ERC721) returns (string memory) {
        require(_exists(_tokenId), "TOKEN DOESN'T EXIST");
        return string(abi.encodePacked(_baseTokenURI, _tokenId.toString()));
    }


}