import dotenv from 'dotenv';
import { task, HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-log-remover";
import "hardhat-contract-sizer";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-abi-exporter";


const result = dotenv.config()

const privateKey = process.env.PRIVATE_KEY || "";
const etherscanAPIKey = process.env.ETHERSCAN_API_KEY || "";
const polygonscanAPIKey = process.env.POLYGONSCAN_API_KEY || "";

if (result.error) {
  throw result.error;
}

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: {
      mainnet: etherscanAPIKey,
      goerli: etherscanAPIKey,
      sepolia: etherscanAPIKey,
      polygonMumbai: polygonscanAPIKey,
      polygon: polygonscanAPIKey,
    }
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      url: process.env.GOERLI_RPC_ENDPOINT,
      accounts: [privateKey],
      gas: 12450000
    },
    mainnet: {
      url: process.env.MAINNET_RPC_ENDPOINT,
      accounts: [privateKey],
      gas: 12450000
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_ENDPOINT,
      accounts: [privateKey],
      gas: 12450000
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_ENDPOINT,
      accounts: [privateKey],
      gas: 12450000
    },
    polygon: {
      url: process.env.POLYGON_RPC_ENDPOINT,
      accounts: [privateKey],
      gas: 12450000
    },
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 150,
    enabled: (process.env.REPORT_GAS) ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_KEY,
  },
  abiExporter: [
    {
      path: './abi/pretty',
      pretty: true,
    },
    {
      path: './abi/ugly',
      pretty: false,
    },
  ]
}

export default config;
