const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MultiSig = await ethers.getContractFactory("MultiSig");
  const multisig = await MultiSig.deploy(["0x8Ff966Ab0DadaDC70C901dD5cDc2C708d3A229AA", "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"], 1);

  await multisig.deployed();

  console.log("MultiSig Contract deployed to:", multisig.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
