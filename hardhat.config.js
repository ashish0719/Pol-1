require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/s6BQdMvz90hkyrS7nWx0mnIXPYiRUA8n", // Replace with your Sepolia Alchemy URL
      accounts: [
        "0f1217dae6365d44db471e710f76b5bc01336fae4198c58d53f7722276465661",
      ], // Replace with your wallet private key
    },
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/s6BQdMvz90hkyrS7nWx0mnIXPYiRUA8n", // Replace with your Amoy Alchemy URL
      accounts: [
        "0f1217dae6365d44db471e710f76b5bc01336fae4198c58d53f7722276465661",
      ], // Replace with your wallet private key
    },
  },
};
