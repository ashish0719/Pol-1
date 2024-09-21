const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const NFtAddress = "0x2a38FFC8c5A5F495C0a62d7d79630034D5E1ad03";
const ContractABI = NFTJson.abi;
const walletAddress = "0x57b02e207c5b665E02bD2867ae2071Ec6bccB5eB";

async function main() {
  const Contract = await hre.ethers.getContractAt(ContractABI, NFtAddress);
  console.log(
    "You have " + (await Contract.balanceOf(walletAddress)) + " NFTs"
  );
}
main((error) => {
  console.log(error);
  process.exitCode = 1;
});
