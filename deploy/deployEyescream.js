let { networkConfig } = require('../helper-hardhat-config')
const fs = require('fs')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    console.log("----------------------------------------------------")
    const Eyescream = await deploy('Eyescream', {
        from: deployer,
        log: true
    })
    console.log(`You have deployed an NFT contract to ${Eyescream.address}`)
    const svgEyescreamContract = await ethers.getContractFactory("Eyescream")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const svgEyescream = new ethers.Contract(Eyescream.address, svgEyescreamContract.interface, signer)
    const networkName = networkConfig[chainId]['name']

    console.log(`Verify with:\n npx hardhat verify --network ${networkName} ${svgEyescream.address}`)
    console.log("Create first Eyescream NFT")
    let filepath = "./img/eyescream_1.svg"
    let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    console.log(`We will use ${filepath} as our SVG, and this will turn into a tokenURI. `)
    tx = await svgEyescream.create(svg)
    await tx.wait(1)
    console.log(`TokenURI: ${await svgEyescream.tokenURI(0)}`)
}

module.exports.tags = ['all', 'svg']