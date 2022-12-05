import { ethers } from "hardhat";
import hre from "hardhat";

import type { VoidersGenesis, VoidersGenesis__factory, VoidersTreasury, VoidersTreasury__factory } from "../typechain-types";
function delay(ms: number) {
  console.log("Pause for: ", ms / 1000);
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const [deployer, owner1,owner2,owner3] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  const WHITELISTER = "0x89bf0bF552f22B844033CF77b42290E16539D167";

  const MAIN_OWNER = deployer.address;
  const OWNER1 = owner1.address;
  const OWNER2 = owner2.address;
  const OWNER3 = owner3.address;

  const BASE_URI = "ipfs://QmTCmK5HhDi22W14kkyjCkMCSyjFqA8TAL5a3QYjy3fyfn/";
  const CONTRACT_URI = "ipfs://QmUYavKi6vW6hDapPPA1zMBJCPUN6S826hbuEdYpWfEJ4o";
  // const PRESALE_START_TIME = 1667902080;
  const PRESALE_START_TIME = 1668082590;
  console.log("PRESALE_START_TIME", PRESALE_START_TIME);

  // await delay(20000);
 
  const treasuryFactory = (await ethers.getContractFactory("VoidersTreasury")) as VoidersTreasury__factory;
  // const treasury = await treasuryFactory.deploy(
  //   [OWNER1, OWNER2, OWNER3],
  //   2
  // ) as VoidersTreasury;

  // await treasury.deployed();
  const treasury = treasuryFactory.attach("0x06558049628e217b8277836c0237e4c64e452225")

  console.log("VoidersTreasury deployed to:", treasury.address);

  // await delay(20000);

  // await hre.run("verify:verify", {
  //   address: treasury.address,
  //   constructorArguments: [
  //     [OWNER1, OWNER2, OWNER3],
  //     2
  //   ],

  // });



  const VoidersFactory = (await ethers.getContractFactory("VoidersGenesis")) as VoidersGenesis__factory;
  const voiders = await VoidersFactory.deploy(
    "Voiders Genesis",
    "VoidGen",
    BASE_URI,
    CONTRACT_URI,
    PRESALE_START_TIME,
    treasury.address,
    WHITELISTER,
    MAIN_OWNER
  
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
      CONTRACT_URI,
      PRESALE_START_TIME,
      treasury.address,
      WHITELISTER,
      MAIN_OWNER
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
