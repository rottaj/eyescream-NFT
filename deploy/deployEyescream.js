let { networkConfig } = require('../helper-hardhat-config')
const fs = require('fs')
const { ethers } = require('hardhat')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    console.log("----------------------------------------------------")
    const Eyescream = await deploy('Eyescream', {
        from: deployer,
        log: true
    })
    console.log(`Contract address: ${Eyescream.address}`)
    const svgEyescreamContract = await ethers.getContractFactory("Eyescream")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const svgEyescream = new ethers.Contract(Eyescream.address, svgEyescreamContract.interface, signer)
    const networkName = networkConfig[chainId]['name']

    console.log(`Verify with:\n npx hardhat verify --network ${networkName} ${svgEyescream.address}`)
    console.log("Creating first Eyescream NFT")
    let filepath = "./img/eyescream_1.svg" // will update every mint... removing previous img. ( All art will be generated before hand )
    let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    console.log(`${filepath} as SVG -- > to TokenURI. `)
    console.log("---------------------- Mint One Eyescream ------------------")
    tx = await svgEyescream.mint(svg, 1, {
        value: ethers.utils.parseEther("0.08")
    })
    await tx.wait(1)
    console.log(`TokenURI: ${await svgEyescream.tokenURI(0)}`)
}

module.exports.tags = ['all', 'svg']