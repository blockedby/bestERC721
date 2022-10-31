import { ethers } from "hardhat";
import hre from "hardhat";

import type { VoidersGenesis, VoidersGenesis__factory } from "../typechain-types";
function delay(ms: number) {
  console.log("Pause for: ", ms / 1000);
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const BASE_URI = "https://ipfs.io/ipfs/QmTrATxkJnRkAFAY9dHkGJ2qtHHnDksaVYsTjumdeijQZw?filename=1.json";
  const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
  const PRESALE_START_TIME = 1667247185966;
  console.log("PRESALE_START_TIME", PRESALE_START_TIME);

  const [owner, otherAccount,treasury] = await ethers.getSigners();
  // whitelister 0x73431fAbf5EeaA29AA973bd46a73e1128A95Aebd
  // whitelister 0xfc758283c2df7add5c01beac19b746f1bb8c3e4a1978fbe2a7d31bab092bd0a4
  // Voiders deployed to: 0x50A68880864aCEd226567dDC35b9bf6F75f4FfC9
  const signers = await ethers.getSigners();

  const whitelister  = ethers.Wallet.createRandom();

  console.log("whitelister", whitelister.address);
  console.log("whitelister", whitelister.privateKey);

  const VoidersFactory = (await ethers.getContractFactory("VoidersGenesis")) as VoidersGenesis__factory;
  const voiders = await VoidersFactory.deploy(
      "Voiders Genesis",
      "VoidGen",
      BASE_URI,
      PRESALE_START_TIME,
      treasury.address,
      whitelister.address,
      PROXY_REG_ADDRESS
  ) as VoidersGenesis;

  await voiders.deployed();
  console.log("Voiders deployed to:", voiders.address);

  await delay(20000);



  await hre.run("verify:verify", {
    address: voiders.address,
    constructorArguments: [
      "Voiders Genesis",
      "VoidGen",
      BASE_URI,
      PRESALE_START_TIME,
      treasury.address,
      whitelister.address,
      PROXY_REG_ADDRESS
    ],

  });



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
