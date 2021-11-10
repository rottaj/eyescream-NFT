const fs = require('fs');
const Web3 = require('web3');

const main = async () => {
    const eyeScreamContractFactory = await hre.ethers.getContractFactory('Eyescream');
    const eyeScreamContract = await eyeScreamContractFactory.deploy();
    await eyeScreamContract.deployed();
    console.log("Contract deployed to:", eyeScreamContract.address);

    let txn;

    let attributes = {
        "Cones": ["Gold, Blue"],
        "Scoops": ["Gold, Blue, Red, Yellow"],
        "Eyes": ["Red, Blue, Yellow, Rainbow"]
    }
    /*
    let testingBaseTokenURI = {
        'name': 'Eyescream',
        'description': 'Eyescream is a community for collaborative creativity!',
        'image': "https://gateway.pinata.cloud/ipfs/QmVLNbza4eacsAL7rYjoSwPxS8wF6n2kjEmK76NhDZiZGV/",
        'external_url': "https://gateway.pinata.cloud/ipfs/QmVLNbza4eacsAL7rYjoSwPxS8wF6n2kjEmK76NhDZiZGV/",
        'attributes': attributes
    }
    */

    let baseContractURI = {
        'name': "Eyescream Social",
        'description': "Eyescream is a community for collaborative creativity!",
        'image': "https://ipfs.io/ipfs/QmabcDCDuRromeLEkRTBUpJwTLNFzN4n8vHS86SWHv9pXX/1.png",
        
    }

    //let baseTokenURI = "ipfs://QmVLNbza4eacsAL7rYjoSwPxS8wF6n2kjEmK76NhDZiZGV/" 
    //let baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmVLNbza4eacsAL7rYjoSwPxS8wF6n2kjEmK76NhDZiZGV/";
    let baseTokenURI = "https://ipfs.io/ipfs/QmXCRjMJ847xsSA5RMyvDNbYQnr3sQLB1icA6NxHnjhY4y/"

    txnBaseContractURI = await eyeScreamContract.setBaseContractURI(JSON.stringify(baseContractURI));
    await txnBaseContractURI.wait();
    console.log("SET CONTRACT URI", txnBaseContractURI)

    txnTwo = await eyeScreamContract.setBaseTokenURI(baseTokenURI);
    await txnTwo.wait();

    console.log("Set Base Token!\n\n\n", txnTwo)

    let quantity = 1
    txn = await eyeScreamContract.mint(quantity, { // mints 2 tokens
        value: ethers.utils.parseEther((0.08 * quantity).toString())
    });
    await txn.wait();

    console.log("Minted");

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