import { ethers } from "hardhat";
import hre from "hardhat";

import type { VoidersTreasury, VoidersTreasury__factory } from "../typechain-types";
function delay(ms: number) {
  console.log("Pause for: ", ms / 1000);
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const [deployer, signer1, signer2, signer3] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const treasuryFactory = (await ethers.getContractFactory("VoidersTreasury")) as VoidersTreasury__factory;
  const treasury = await treasuryFactory.deploy(
    [signer1.address, signer2.address, signer3.address],
    2
  ) as VoidersTreasury;

  await treasury.deployed();
  console.log("VoidersTreasury deployed to:", treasury.address);

  await delay(20000);

  await hre.run("verify:verify", {
    address: treasury.address,
    constructorArguments: [
      [signer1.address, signer2.address, signer3.address],
      2
    ],

  });



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
