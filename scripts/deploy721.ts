import { ethers } from "hardhat";
import hre from "hardhat";

import type { MyCreature,MyCreature__factory, MyCreatureFactory, MyCreatureFactory__factory } from "../typechain-types";

async function main() {
  const PROXY_REG_ADDRESS = ethers.constants.AddressZero;

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // const monsterFactory:MyCreature__factory = (await ethers.getContractFactory("MyCreature")) as MyCreature__factory;
  // const monster:MyCreature = await monsterFactory.deploy(
  //   // PROXY_REG_ADDRESS
  // );
  // await monster.deployed();

  // console.log("MyCreature deployed to:", monster.address);

  // await hre.run("verify:verify", {
  //   address: monster.address,
  //   constructorArguments: [
  //   ],
  // });
  

  // const MyMonsterFactory:MyCreatureFactory__factory = (await ethers.getContractFactory("MyCreatureFactory")) as MyCreatureFactory__factory;
  // const myMonsterFactory:MyCreatureFactory = await MyMonsterFactory.deploy(
  //   PROXY_REG_ADDRESS,
  //   monster.address
  // )
  // await myMonsterFactory.deployed();

  // console.log("MyCreatureFactory deployed to:", myMonsterFactory.address);

  await hre.run("verify:verify", {
    address: "0x7d8561557Cf3325087660073217EB65B8D6EAA11",
    constructorArguments: [
      PROXY_REG_ADDRESS,
      "0x66D0B6462D522689ea1FDcD94Af8dDeD4c61F782"
    ],
  });

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
