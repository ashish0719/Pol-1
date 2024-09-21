# NFT Bridge using FXPortal

This project showcases how the FXPortal bridge facilitates the seamless transfer of ERC721 NFTs from the Ethereum Sepolia testnet to the Polygon amoy testnet.

## Overview

In this project, there's a Solidity smart contract integrated to mint ERC721 NFTs on the Ethereum Sepolia testnet. Following their minting, these NFTs are subsequently transported to the Polygon amoy testnet using the FXPortal bridge. 5 images nft is creted and uploaded with its metadata file on pinata. and using that ipfs id to send the token nfts

## Usage

1. Fork this repository and clone it to your local machine.
2. Run `npm install` or 'npm i' to install all dependencies.
3. Deploy the smart contract on the Ethereum sepolia testnet using the `deploy.js` script.
4. Mint five ERC721 NFTs using the `mint.js` script.
5. Transfer the NFTs to the Polygon Mumbai testnet using the FXPortal bridge using the `approveDeposit.js` script.
6. You can then check the balance of the polygon contract to verify the transfer using the `getBalance.js` script.

## Link for the deployed NFT collection 
- [Here](https://testnets.opensea.io/collection/mynft-3883)
  
## Help

1. Use alchemy or infura to create a secret api key for the two testnetwork sepolia --> amoy.
    
   1. https://www.alchemy.com/chain-connect/endpoints/rpc-sepolia-sepolia
    2. https://docs.infura.io/api/network-endpoints

  
3. There should be a sufficient balnce in the wallet (Metamask) for paying the gas fees you can get free faucets from :
    ```
   https://faucets.chain.link/
  ```
 4. Use the opensea.testnet to verify your minted nfts.  
   


```shell
npx hardhat run scripts/<scriptName> --network <networkName>
```
## Authors
Name - Ashish Kumar Saurav
Email-Id sauravashish.0000@gmail.com


