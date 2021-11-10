const { expect } = require("chai");
const { ethers } = require("hardhat");



describe ("Set Base Token URI", function () {
  it("Should set base token URI", async function () {
    const Eyescream = await ethers.getContractFactory("Eyescream");
    const eyescream = await Eyescream.deploy();
    await eyescream.deployed();
    let baseTokenURI = "https://ipfs.io/ipfs/QmXCRjMJ847xsSA5RMyvDNbYQnr3sQLB1icA6NxHnjhY4y/"

    txnTwo = await eyescream.setBaseTokenURI(baseTokenURI);
    await txnTwo.wait();
    console.log("BASE TOKEN URI SET")
  })
})




describe("Mint Token", function() {
  it("Should mint token", async function() {
    const Eyescream = await ethers.getContractFactory("Eyescream");
    const eyescream = await Eyescream.deploy();
    await eyescream.deployed();
    let quantity = 2
    txn = await eyescream.mint(quantity, { // mints 2 tokens
        value: ethers.utils.parseEther((0.08 * quantity).toString())
    });
    await txn.wait();

    console.log("Minted");
  })
})

describe("Get Total Supply", function () {
  it("Should return total supply of tokens", async function () {
    const Eyescream = await ethers.getContractFactory("Eyescream");
    const eyescream = await Eyescream.deploy();
    await eyescream.deployed();

    let totalAmount = await eyescream.totalSupply();
    //totalAmount +=1;
    //await totalAmount.wait();
    console.log("Total amount foobar", totalAmount)
    console.log("Total Amount: ", parseInt(totalAmount))

  })
})

describe("GetTokenURI", function () {
  it("Should return token URI based on _tokenId", async function (_tokenId) {
    const Eyescream = await ethers.getContractFactory("Eyescream");
    const eyescream = await Eyescream.deploy();
    await eyescream.deployed();

    const tokenURI = await eyescream.tokenURI(1);
    await tokenURI.wait();

    console.log("Test TOKEN URI", tokenURI)
  })
})