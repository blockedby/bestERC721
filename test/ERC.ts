import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Voiders721, Voiders721__factory } from "../typechain-types";
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
    const PROXY_REG_ADDRESS = ethers.constants.AddressZero;
    const PRESALE_START_TIME = (await time.latest()) + (time.duration.days(1));



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
        "Name",
        "symbol",
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
    return {
        owner, otherAccount,
        whitelister, treasury, developer1, developer2, developer3, developer4, developer5,
        developer6, developer7, developer8, developer9, developer10,
        developer11, developer12, developer13, developer14, developer15,
        developer16, developer17, developer18, developer19, developer20,
        developer21, developer22, developer23, developer24, developer25,
        developer26, developer27, developer28,
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
        expect(await voiders.name()).to.eq("Name");
        expect(await voiders.symbol()).to.eq("symbol");
        expect(await voiders.presaleStartTime()).to.eq(PRESALE_START_TIME);
        expect(await voiders.presaleEndTime()).to.eq(BigNumber.from(PRESALE_START_TIME).add(ethers.BigNumber.from(3600 * 3)));
        expect(await voiders.proxyRegistryAddress()).to.eq(PROXY_REG_ADDRESS);
    });
    it("Should check baseTokenURI", async function () {
        const { voiders, owner, otherAccount } = await loadFixture(deployERC721Fixture);

        expect(await voiders.baseTokenURI()).to.eq("");

        await expect(voiders.connect(otherAccount).changeBaseTokenURI("https://voiders.io/"))
            .to.be.revertedWith("Ownable: caller is not the owner");

        await voiders.connect(owner).changeBaseTokenURI("https://voiders.io/");
        expect(await voiders.baseTokenURI()).to.eq("https://voiders.io/");
    });
    it("Should check tokenURI", async function () {
        const { voiders, owner, otherAccount } = await loadFixture(deployERC721Fixture);

        expect(await voiders.baseTokenURI()).to.eq("");

        await voiders.connect(owner).changeBaseTokenURI("https://voiders.io/");

        expect(await voiders.tokenURI(0)).to.eq("https://voiders.io/0.json");
        expect(await voiders.tokenURI(101)).to.eq("https://voiders.io/101.json");
    });

    it("Should check NFT at treasury address", async function () {
        const { voiders, treasury } = await loadFixture(deployERC721Fixture);
        expect(await voiders.balanceOf(treasury.address)).to.eq(20);
    });
    it("Should check NFT at developer address", async function () {
        const { voiders,
            developer1, developer2, developer3, developer4, developer5, developer6, developer7, developer8, developer9, developer10,
            developer11, developer12, developer13, developer14, developer15, developer16, developer17, developer18, developer19, developer20,
            developer21, developer22, developer23, developer24, developer25, developer26, developer27, developer28 } = await loadFixture(deployERC721Fixture);

        for (let i = 1; i <= 28; i++) {
            expect(await voiders.balanceOf((eval("developer" + i)).address)).to.eq(1);
        }
        expect(await voiders.balanceOf(developer24.address)).to.eq(1);
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
            await expect(voiders.connect(otherAccount).presaleMint(1, sign, { value: PRESALE_PRICE })).to.changeTokenBalance(voiders, otherAccount, 1);
        });
        it("Should not mint with wrong signature", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, owner.address);
            await time.increaseTo(PRESALE_START_TIME);
            await expect(voiders.connect(otherAccount).presaleMint(1, sign, { value: PRESALE_PRICE })).to.be.revertedWith("You are not whitelisted");
        });
        it("Should not sale before starttime", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await expect(voiders.connect(otherAccount).presaleMint(1, sign, { value: PRESALE_PRICE })).to.be.revertedWith("Presale is not active");
        });
        it("Should not sale twice", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            await expect(voiders.connect(otherAccount).presaleMint(1, sign, { value: PRESALE_PRICE })).to.changeTokenBalance(voiders, otherAccount, 1);
            expect(await voiders.mintedFromWhitelist(otherAccount.address)).to.eq(true);
            await expect(voiders.connect(otherAccount).presaleMint(1, sign, { value: PRESALE_PRICE })).to.be.revertedWith("You are already minted from whitelist");
        });
        it("Should not sale over max supply", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            const mintAmount = 888-48;
            await expect(voiders.connect(otherAccount).presaleMint(mintAmount, sign, { value: PRESALE_PRICE.mul(mintAmount) })).to.changeTokenBalance(voiders, otherAccount, mintAmount);
        });

        it("Should not sale over max supply", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            const mintAmount = 888-48+1;
            await expect(voiders.connect(otherAccount).presaleMint(mintAmount, sign, { value: PRESALE_PRICE.mul(mintAmount) })).to.be.revertedWith("Exceeds max supply of tokens")
        });

        it("Should not sale with wrong eth amount", async function () {
            const { voiders, owner, whitelister, otherAccount, PRESALE_START_TIME } = await loadFixture(deployERC721Fixture);
            const { hash, sign } = await signAddress(whitelister, otherAccount.address);
            await time.increaseTo(PRESALE_START_TIME);
            const mintAmount = 1;
            await expect(voiders.connect(otherAccount).presaleMint(mintAmount, sign, { value: PRESALE_PRICE.mul(mintAmount).sub(1) })).to.be.revertedWith("Wrong amount of ETH")
            await expect(voiders.connect(otherAccount).presaleMint(mintAmount, sign, { value: PRESALE_PRICE.mul(mintAmount).add(1) })).to.be.revertedWith("Wrong amount of ETH")
            await expect(voiders.connect(otherAccount).presaleMint(mintAmount, sign, { value: PRESALE_PRICE.mul(mintAmount) })).to.changeTokenBalance(voiders, otherAccount, mintAmount);
        });


    });

});
