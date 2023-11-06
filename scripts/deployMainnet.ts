import { ethers } from "hardhat";

async function main(inputTokenAddress: string, inputTokenDecimals: string, outputTokenAddress: string, outputTokenDecimals: string, conversionRate: ) {
  const [deployer] = await ethers.getSigners();

  console.log(
      "Deploying contracts with the account:",
      deployer.address
  );
  
  console.log("Input token address:", inputTokenAddress);
  console.log("Output token address:", outputTokenAddress);

  const TokenSwap = await ethers.getContractFactory("TokenSwap");
  const tokenSwap = await TokenSwap.deploy(inputTokenAddress, inputTokenDecimals, outputTokenAddress, outputTokenDecimals, conversionRate);

  console.log("TokenSwap address:", tokenSwap.address);
}

const inputTokenAddress = process.env.INPUT_TOKEN_ADDRESS || "";
const inputTokenDecimals = process.env.INPUT_TOKEN_DECIMALS || "";
const outputTokenAddress = process.env.OUTPUT_TOKEN_ADDRESS || "";
const outputTokenDecimals = process.env.OUTPUT_TOKEN_DECIMALS || "";
const conversionRate = process.env.CONVERSION_RATE || 1;

main(inputTokenAddress, inputTokenDecimals, outputTokenAddress, outputTokenDecimals, conversionRate)
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
