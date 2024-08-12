const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/Goddey.sol/Goddey.json");

const contractAddress = "0xB0477Badc4403251bB5551b216B292D1fF870Be8";
const contractABI = contractJSON.abi;
const tokenId = 2;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  console.log(`NFT tokenId ${tokenId}`);
  console.log(`Prompt: ${await contract.promtDescription(tokenId)}`);
  console.log(`NFT owner: ${await contract.ownerOf(tokenId)}`);
  console.log(`URI: ${await contract.tokenURI(tokenId)}`);
  console.log(`URL: https://ipfs.io/ipfs/${await contract.tokenURI(tokenId)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
