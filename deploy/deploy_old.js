const fs = require('fs');
const Web3 = require('web3');

const main = async () => {
    const eyeScreamContractFactory = await hre.ethers.getContractFactory('Eyescream');
    const eyeScreamContract = await eyeScreamContractFactory.deploy();
    await eyeScreamContract.deployed();
    console.log("Contract deployed to:", eyeScreamContract.address);

    let filepath = "./img/preMint/1.svg" // will update every mint... removing previous img. ( All art will be generated before hand )
    var svgs = [] // array of svg files ( will by passes as bytes32 )
    let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    svgs.push(Web3.utils.asciiToHex(svg).padEnd(33, '0')) // convert svg file to bytes32 & push to svgs arr.

    let txn;
    txn = await eyeScreamContract.mint(1, { // mints 2 tokens
        value: ethers.utils.parseEther((0.08 * svgs.length).toString())
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