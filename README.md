
The smart contract is written in Solidity and is meant to be deployed on the various EVM-compatible blockchains.

## Features



## Pre-requisites

You need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [Hardhat Deploy](https://hardhat.org/plugins/hardhat-deploy.html)

## Setup

1. Clone the repository


2. Install dependencies



3. Compile

```bash
npx hardhat compile
```

4. Unit tests

```bash
REPORT_GAS=true npx hardhat test
```

5. Run local node if you need to deploy locally

```bash
npx hardhat node
```

6. Deploy the contracts, change the name of the network. See hardhat config

```bash
npx hardhat run scripts/deploy.ts --network NETWORK_NAME
```


