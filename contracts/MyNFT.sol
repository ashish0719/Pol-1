
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyNFT is ERC721 ,Ownable{
   uint256 public tokenSupply=0;
  
   
 constructor() ERC721("ZOOWORLD", "ZOO") {}

function mintNFT() public payable {
      tokenSupply++;
     _mint(msg.sender,tokenSupply);  
   
       }
function withdraw()external onlyOwner{
    payable(msg.sender).transfer(address(this).balance);
      
       }
       
   function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    _requireMinted(tokenId);

    string memory baseURI = _baseURI();
    string memory tokenIdString = Strings.toString(tokenId);
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenIdString, ".json")) : "";
}
 function _baseURI() internal pure override returns(string memory){
     return "ipfs://QmVpnSbzYe1XdyE1S4QzcYukk1MJ3FQh6SqCuu86AeFmpW/";
    }

function getBalance () external view returns(uint256){
        return address(this).balance;
       }
}

    
