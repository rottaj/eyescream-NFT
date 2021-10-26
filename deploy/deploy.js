const fs = require('fs')

const main = async () => {
    const eyeScreamContractFactory = await hre.ethers.getContractFactory('Eyescream');
    const eyeScreamContract = await eyeScreamContractFactory.deploy();
    await eyeScreamContract.deployed();
    console.log("Contract deployed to:", eyeScreamContract.address);

    let filepath = "./img/eyescream_1.svg" // will update every mint... removing previous img. ( All art will be generated before hand )
    let svg = fs.readFileSync(filepath, { encoding: "utf8" })

    let txn;
    txn = await eyeScreamContract.mint(svg, 1, {
        value: ethers.utils.parseEther("0.08")
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