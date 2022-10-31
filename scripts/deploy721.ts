import { ethers } from "hardhat";
import hre from "hardhat";

import type { Voiders721, Voiders721__factory } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
  const PRESALE_START_TIME = Date.now() + 1000;
  console.log("PRESALE_START_TIME:", PRESALE_START_TIME);



  // const [owner, otherAccount] = await ethers.getSigners();
  const [owner, otherAccount, whitelister, treasury, developer1, developer2, developer3, developer4, developer5,
    developer6, developer7, developer8, developer9, developer10,
    developer11, developer12, developer13, developer14, developer15,
    developer16, developer17, developer18, developer19, developer20,
    developer21, developer22, developer23, developer24, developer25,
    developer26, developer27, developer28
  ] = await ethers.getSigners();


  // const VoidersFactory = (await ethers.getContractFactory("Voiders721")) as Voiders721__factory;
  // const voiders = await VoidersFactory.deploy(
  //   "Voiders",
  //   "VDRS",
  //   PRESALE_START_TIME,
  //   [developer1.address, developer2.address, developer3.address, developer4.address, developer5.address,
  //   developer6.address, developer7.address, developer8.address, developer9.address, developer10.address,
  //   developer11.address, developer12.address, developer13.address, developer14.address, developer15.address,
  //   developer16.address, developer17.address, developer18.address, developer19.address, developer20.address,
  //   developer21.address, developer22.address, developer23.address, developer24.address, developer25.address,
  //   developer26.address, developer27.address, developer28.address],
  //   PROXY_REG_ADDRESS,
  //   treasury.address,
  //   whitelister.address
  // ) as Voiders721;
  // await voiders.deployed()

  // console.log("Voiders deployed to:", voiders.address);


  await hre.run("verify:verify", {
    address: "0xA6392aB958387A4178173980431fea8B26914164",
    constructorArguments: [
      "Voiders",
      "VDRS",
      1667147414252,
      [developer1.address, developer2.address, developer3.address, developer4.address, developer5.address,
      developer6.address, developer7.address, developer8.address, developer9.address, developer10.address,
      developer11.address, developer12.address, developer13.address, developer14.address, developer15.address,
      developer16.address, developer17.address, developer18.address, developer19.address, developer20.address,
      developer21.address, developer22.address, developer23.address, developer24.address, developer25.address,
      developer26.address, developer27.address, developer28.address],
      PROXY_REG_ADDRESS,
      treasury.address,
      whitelister.address
    ],

  });



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
