import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Voiders721, Voiders721__factory } from "../typechain-types";

async function deployERC721Fixture() {
    // const PROXY_REG_ADDRESS = "1e0049783f008a0085193e00003d00cd54003c71";
    const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
    const PRESALE_START_TIME = await time.latest();



    const [owner, otherAccount] = await ethers.getSigners();
    const [whitelister, treasury, developer1, developer2, developer3, developer4, developer5,
        developer6, developer7, developer8, developer9, developer10,
        developer11, developer12, developer13, developer14, developer15,
        developer16, developer17, developer18, developer19, developer20,
        developer21, developer22, developer23, developer24, developer25,
        developer26, developer27, developer28
    ] = await ethers.getSigners();


    const VoidersFactory = (await ethers.getContractFactory("Voiders721")) as Voiders721__factory;
    const voiders = await VoidersFactory.deploy(
        PRESALE_START_TIME,
        [developer1.address, developer2.address, developer3.address, developer4.address, developer5.address,
        developer6.address, developer7.address, developer8.address, developer9.address, developer10.address,
        developer11.address, developer12.address, developer13.address, developer14.address, developer15.address,
        developer16.address, developer17.address, developer18.address, developer19.address, developer20.address,
        developer21.address, developer22.address, developer23.address, developer24.address, developer25.address,
        developer26.address, developer27.address, developer28.address],
        PROXY_REG_ADDRESS,
        treasury.address,
        whitelister.address
    ) as Voiders721;
    return {owner, otherAccount,
        whitelister, treasury, developer1, developer2, developer3, developer4, developer5,
        developer6, developer7, developer8, developer9, developer10,
        developer11, developer12, developer13, developer14, developer15,
        developer16, developer17, developer18, developer19, developer20,
        developer21, developer22, developer23, developer24, developer25,
        developer26, developer27, developer28,

        voiders,VoidersFactory
    };

}

describe("ERC", function () {
    it("Should deploy", async function () {
        const {voiders,VoidersFactory} = await loadFixture(deployERC721Fixture);
        expect(voiders.interface).to.eq(VoidersFactory.interface);
        expect(voiders.address).to.not.eq(ethers.constants.AddressZero);
    });
    // it("Should check NFT at treasury address", async function () {
    //     const {voiders,treasury} = await loadFixture(deployERC721Fixture);
    //     expect(await voiders.balanceOf(treasury.address)).to.eq(20);
    // });

});
