require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

require('dotenv').config();
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIV_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    //hardhat: { },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [
        PRIV_KEY
      ],
      saveDeployments: true,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  solidity: "0.8.4",
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
