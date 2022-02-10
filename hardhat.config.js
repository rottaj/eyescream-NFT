//require('@typechain/hardhat')
require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

require('dotenv').config()
const RINKEBY_URL = process.env.RINKEBY_URL;
const PHRASE = process.env.PHRASE
//const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PHRASE],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  etherscan: {
    //apiKey: ETHERSCAN_API
  },
};