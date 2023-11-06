import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

describe("NFT", function () {
  let contract: any, ERC721: any, owner: any, addr1: any;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    contract = await ethers.getContractFactory("NFT");
    ERC721 = await contract.deploy("InputToken", "INP");
  });

  it("Should set the right owner", async function () {
    expect(await ERC721.owner()).to.equal(owner.address);
  });

  //it("Should allow owner to change conversion rate", async function () {
  // const newRate = ethers.utils.parseUnits("2", 14);
  // await swap.connect(owner).setConversionRate(newRate);
  // expect(await swap.conversionRate()).to.equal(newRate);
  //});

  //it("Should not allow other address to transfer ownership", async function () {
  // try to change ownership from addr1
  // expect(
  //  await swap.connect(addr1).transferOwnership(addr1.address)
  //).to.be.revertedWith(
  //  "VM Exception while processing transaction: reverted with reason string 'Ownable: caller is not the owner'"
  //);
  // });
});
