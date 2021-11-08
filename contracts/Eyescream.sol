pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";
import "hardhat/console.sol";

contract Eyescream is Ownable, ERC721Enumerable{
    
    uint256 public constant MAX_SUPPLY = 10101; // Total number of Eyescream tokens.
    uint256 public constant PRICE = 0.08 ether; 
    uint256 public constant MAX_PER_TX = 3;
    address private constant _t1 = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;

    mapping (address => uint256) _totalClaimed;

    constructor() ERC721("Eyescream", "EYE") {}

    function mint(uint256 _quantity) external payable {
        require(totalSupply() < MAX_SUPPLY, "SOLD OUT");
        require(totalSupply() + _quantity <= MAX_SUPPLY, "SOLD OUT");
        require(_quantity > 0, "AMOUNT CANNOT BE ZERO");
        require(_quantity <= MAX_PER_TX, "AMOUNT EXCEEDED PER TXN");
        require(msg.value == (_quantity * PRICE), "PRICE LIMIT NOT REACHED");
        for (uint256 i=0; i<=_quantity; i++) {
            _safeMint(msg.sender, totalSupply() + 1);
            _totalClaimed[msg.sender] += 1;
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