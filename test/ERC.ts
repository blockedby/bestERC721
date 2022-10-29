import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MyCreature, MyCreatureFactory, MyCreatureFactory__factory, MyCreature__factory } from "../typechain-types";

describe("ERC", function () {
    it("FUCKING TEST", async function () {
        
        const PROXY_REG_ADDRESS = "1e0049783f008a0085193e00003d00cd54003c71";
        // const PROXY_REG_ADDRESS = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";

        const [deployer] = await ethers.getSigners();

        console.log("Deploying contracts with the account:", deployer.address);

        const monsterFactory: MyCreature__factory = (await ethers.getContractFactory("MyCreature")) as MyCreature__factory;
        const monster: MyCreature = await monsterFactory.deploy(
            // PROXY_REG_ADDRESS
        );
        await monster.deployed();

        console.log("MyCreature deployed to:", monster.address);


        const MyMonsterFactory: MyCreatureFactory__factory = (await ethers.getContractFactory("MyCreatureFactory")) as MyCreatureFactory__factory;
        const myMonsterFactory: MyCreatureFactory = await MyMonsterFactory.deploy(
            PROXY_REG_ADDRESS,
            monster.address
        )
        await myMonsterFactory.deployed();

        await monster.transferOwnership(myMonsterFactory.address);

        console.log("MyCreatureFactory deployed to:", myMonsterFactory.address);

        await myMonsterFactory.mint(0,deployer.address);
        await myMonsterFactory.mint(0,deployer.address);
        await myMonsterFactory.mint(0,deployer.address);

        console.log("MINTERD");

        console.log(await monster.balanceOf(deployer.address));
    });

});
