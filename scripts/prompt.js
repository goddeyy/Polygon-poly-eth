const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/Goddey.sol/Goddey.json");
require("dotenv").config();

const contractAddress = "0x6e73e8D0625D563E0c43a41d65FA8B79AE284d36";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`Prompt ${i + 1}: ${await contract.promtDescription(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
