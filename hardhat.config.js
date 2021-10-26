require('@nomiclabs/hardhat-waffle');

const ROPSTEN_PRIVATE_KEY = "X";

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'X',
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
};