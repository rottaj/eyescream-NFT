const fs = require('fs');
const Web3 = require('web3');

const main = async () => {
    const eyeScreamContractFactory = await hre.ethers.getContractFactory('Eyescream');
    const eyeScreamContract = await eyeScreamContractFactory.deploy();
    await eyeScreamContract.deployed();
    console.log("Contract deployed to:", eyeScreamContract.address);

    let txn;

    let baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmVLNbza4eacsAL7rYjoSwPxS8wF6n2kjEmK76NhDZiZGV/" 
    let quantity = 1
    txn = await eyeScreamContract.mint(quantity, { // mints 2 tokens
        value: ethers.utils.parseEther((0.08 * quantity).toString())
    });
    await txn.wait();

    console.log("Minted");
    txnTwo = await eyeScreamContract.setBaseTokenURI(baseTokenURI);
    await txnTwo.wait();

    console.log("Set Base Token!\n\n\n", txnTwo)
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();