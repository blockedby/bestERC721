import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { VoidersGenesis, VoidersGenesis__factory } from "../typechain-types";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


async function signAddress(signer: SignerWithAddress, toSign: string) {
    const hash = ethers.utils.solidityKeccak256(
        ["address"],
        [toSign]
    );
    const sign = await signer.signMessage(ethers.utils.arrayify(hash));
    return { hash, sign };
}


async function deployERC721Fixture() {
    // const PROXY_REG_ADDRESS = "1e0049783f008a0085193e00003d00cd54003c71";
    const BASE_URI = "https://voiders.io/api/voiders/";
    const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
    const PRESALE_START_TIME = (await time.latest()) + (time.duration.days(1));



    const [owner, otherAccount, whitelister,treasury] = await ethers.getSigners();


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
    return {
        BASE_URI,
        owner, otherAccount,
        whitelister, treasury,
        PROXY_REG_ADDRESS, PRESALE_START_TIME,
        voiders, VoidersFactory
    };



}

describe("ERC", function () {
    it("Should deploy", async function () {
        const { voiders, VoidersFactory } = await loadFixture(deployERC721Fixture);
        expect(voiders.interface).to.eq(VoidersFactory.interface);
        expect(voiders.address).to.not.eq(ethers.constants.AddressZero);
    });
    it("Should check init params", async function () {
        const { voiders, PROXY_REG_ADDRESS, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
        expect(await voiders.name()).to.eq("Voiders Genesis");
        expect(await voiders.symbol()).to.eq("VoidGen");
        expect(await voiders.presaleStartTime()).to.eq(PRESALE_START_TIME);
        expect(await voiders.presaleEndTime()).to.eq(BigNumber.from(PRESALE_START_TIME).add(ethers.BigNumber.from(3600 * 3)));
        expect(await voiders.proxyRegistryAddress()).to.eq(PROXY_REG_ADDRESS);
    });
    it("Should check baseTokenURI", async function () {
        const { voiders, owner, otherAccount, BASE_URI } = await loadFixture(deployERC721Fixture);

        expect(await voiders.baseTokenURI()).to.eq(BASE_URI);

        await expect(voiders.connect(otherAccount).changeBaseTokenURI("https://voiders.io/"))
            .to.be.revertedWith("Ownable: caller is not the owner");

        await voiders.connect(owner).changeBaseTokenURI("https://voiders.io/");
        expect(await voiders.baseTokenURI()).to.eq("https://voiders.io/");
    });
    it("Should check tokenURI", async function () {
        const { voiders, owner, BASE_URI } = await loadFixture(deployERC721Fixture);

        expect(await voiders.baseTokenURI()).to.eq(BASE_URI);

        await voiders.connect(owner).changeBaseTokenURI("https://voiders.io/");

        expect(await voiders.tokenURI(0)).to.eq("https://voiders.io/");
        expect(await voiders.tokenURI(101)).to.eq("https://voiders.io/");
    });

    it("Should check NFT at treasury address", async function () {
        const { voiders, treasury } = await loadFixture(deployERC721Fixture);
        expect(await voiders.balanceOf(treasury.address)).to.eq(25);
    });
    describe("Presale", function () {
        const PRESALE_PRICE = ethers.utils.parseEther("0.25");
        it("Should check whitelister", async function () {
            const { voiders, owner, whitelister } = await loadFixture(deployERC721Fixture);
            expect(await voiders.whitelistChecker()).to.eq(whitelister.address);
            const { hash, sign } = await signAddress(whitelister, owner.address);
        });
        it("Should check whitelister signature", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const hash = ethers.utils.solidityKeccak256(
                ["address"],
                [otherAccount.address]
            );
            const sign = await whitelister.signMessage(ethers.utils.arrayify(hash));
            await time.increaseTo(PRESALE_START_TIME);
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.changeTokenBalance(voiders, otherAccount, 1);
        });
        it("Should not mint with wrong signature", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, owner.address);
            await time.increaseTo(PRESALE_START_TIME);
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.be.revertedWith("You are not whitelisted");
        });
        it("Should not sale before starttime", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.be.revertedWith("Presale is not active");
        });
        it("Should not sale after starttime", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo((await voiders.presaleEndTime()).add(1));

            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.be.revertedWith("Presale is not active");
        });

        it("Should not sale twice", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.changeTokenBalance(voiders, otherAccount, 1);
            expect(await voiders.mintedFromWhitelist(otherAccount.address)).to.eq(true);
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })).to.be.revertedWith("You are already minted from whitelist");
        });
        it("Should presale to max supply", async function () {
            const BASE_URI = "https://voiders.io/api/voiders/";
            const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
            const PRESALE_START_TIME = (await time.latest()) + (time.duration.days(1));


            const signers = await ethers.getSigners();
            const owner = signers[0];
            const otherAccount = signers[1];
            const whitelister = signers[2];
            const treasury = signers[3];

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

            expect(await voiders.totalSupply()).to.eq(25);
            expect(await voiders.balanceOf(treasury.address)).to.eq(25);

            await time.increaseTo(PRESALE_START_TIME);
            const mintAmount = 863 ;  // 888 - 25;

            console.log("it's realy long... please, stand by.")
            for (let i = 4; i < mintAmount + 4; i++) {
                const { hash, sign } = await signAddress(whitelister, signers[i].address);
                await expect(voiders.connect(signers[i]).presaleMint(sign, { value: PRESALE_PRICE })).to.changeTokenBalance(voiders, signers[i], 1);
            }

            const { hash, sign } = await signAddress(whitelister, otherAccount.address);

            await expect(
                voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE })
            ).to.be.revertedWith("Exceeds max supply of tokens")

            expect(await voiders.totalSupply()).to.eq(888);
            // await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE.mul(mintAmount) })).to.changeTokenBalance(voiders, otherAccount, mintAmount);
        });

        it("Should not mint more than max suuply", async function () {
            const { voiders, owner, whitelister, otherAccount, treasury } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo((await voiders.presaleEndTime()).add(1));
            const mintAmount = 888 - 25;
            console.log("it's realy long... please, stand by.")
            for (let i = 0; i < mintAmount; i++) {
                await (voiders.connect(owner).mintTo(otherAccount.address));
            }

            expect (await voiders.totalSupply()).to.eq(888);
            expect(await voiders.balanceOf(owner.address)).to.eq(0);
            expect(await voiders.balanceOf(treasury.address)).to.eq(25);
            expect(await voiders.balanceOf(otherAccount.address)).to.eq(888 - 25);

            await expect(voiders.connect(owner).mintTo(otherAccount.address)).to.be.revertedWith("Exceeds max supply of tokens");
        });



        it("Should not sale with wrong eth amount", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            const mintAmount = 1;
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE.mul(mintAmount).sub(1) })).to.be.revertedWith("Wrong amount of ETH")
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE.mul(mintAmount).add(1) })).to.be.revertedWith("Wrong amount of ETH")
            await expect(voiders.connect(otherAccount).presaleMint(sign, { value: PRESALE_PRICE.mul(mintAmount) })).to.changeTokenBalance(voiders, otherAccount, mintAmount);
        });
    });
});
