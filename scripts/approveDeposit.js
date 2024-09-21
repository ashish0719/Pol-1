const hre = require("hardhat");
require("dotenv").config();
const fxRootContractABI = require("../fxRootContractABI.json");
const NFTContractABI = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const FxERC721RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const NFTAddress = "0xeFbAD99471C5a5570b56E13C80D3e0A12Fd7205B";

const NFTABI = NFTContractABI.abi;
const walletAddress = "0x57b02e207c5b665E02bD2867ae2071Ec6bccB5eB";

async function main() {
  const contract = await hre.ethers.getContractAt(NFTABI, NFTAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    FxERC721RootAddress
  );

  for (let i = 1; i <= 5; i++) {
    try {
      //approve transaction
      const approveTx = await contract.approve(FxERC721RootAddress, i);
      await approveTx.wait();
      console.log(`Approved NFT ${i} for the transfer.`);

      //deposit transaction
      const depositTx = await fxContract.deposit(
        NFTAddress,
        walletAddress,
        i,
        "0x6556"
      );
      await depositTx.wait();
      console.log(`Deposited token ${i} to fxProtal Bridge`);
    } catch (e) {
      console.log(e.message);
    }
  }
}
main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
