const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/Goddey.sol/Goddey.json");

const contractAddress = "0xB0477Badc4403251bB5551b216B292D1fF870Be8";
const contractABI = contractJSON.abi;
const walletAddress = "0x0E4fFA7F869E6799185B1055bdd7983A253574cC";
let noOfNFTs = 5;
async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  const tx = await contract.mint(walletAddress, noOfNFTs);
  await tx.wait();

  console.log(
    walletAddress +
      " now has: " +
      (await contract.balanceOf(walletAddress)) +
      " NFTs"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
