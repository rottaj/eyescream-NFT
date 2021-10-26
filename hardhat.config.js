require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

require('dotenv').config()
const RINKEBY_URL = process.env.RINKEBY_URL;
const PHRASE = process.env.PHRASE
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PHRASE],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API
  },
};