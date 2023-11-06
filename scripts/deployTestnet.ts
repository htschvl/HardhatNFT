import { ethers } from "hardhat";


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
      "Deploying contracts with account:",
      deployer.address
  );
  
  const MockERC20_4 = await ethers.getContractFactory("MockERC20_4");
  const inputToken = await MockERC20_4.deploy("Input Token", "INP");

  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const outputToken = await MockERC20.deploy("Output Token", "OUT");

  console.log("MockERC20_4 address:", inputToken.address);
  console.log("MockERC20 address:", outputToken.address);

  const TokenSwap = await ethers.getContractFactory("TokenSwap");
  // at this time we are using 4 decimal places to the input and 18 to the output and the conversion rate is 1:1
  const tokenSwap = await TokenSwap.deploy(inputToken.address, 4, outputToken.address, 18, 1);

  console.log("TokenSwap address:", tokenSwap.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });