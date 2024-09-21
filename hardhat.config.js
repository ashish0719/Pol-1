require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/", // Replace with your Sepolia Alchemy URL
      accounts: [
        "",
      ], // Replace with your wallet private key
    },
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/", // Replace with your Amoy Alchemy URL
      accounts: [
        "",
      ], // Replace with your wallet private key
    },
  },
};
