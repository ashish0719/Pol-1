const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const NFtAddress = "0xF6Edf6914A612b4CC30dBcF8187cB98Dfe024fe2";
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
