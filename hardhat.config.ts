import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@primitivefi/hardhat-dodoc';

import * as dot from "dotenv";
dot.config();

const config: HardhatUserConfig = {
	networks: {
		mainnet: {
			url: process.env.ETH_URL || "",
			// accounts: {
			// 	mnemonic: process.env.MNEMONIC_PROD || "",
			// 	path: "m/44'/60'/0'/0",
			// 	initialIndex: 0,
			// 	count: 50,
			// 	passphrase: "",
			// }
			gasPrice: 23500000000,
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
		goerli: {
			url: process.env.GOERLI_URL || "",
			chainId: 5,
			accounts: {
				mnemonic: process.env.MNEMONIC || "",
				path: "m/44'/60'/0'/0",
				initialIndex: 0,
				count: 50,
				passphrase: "",
			}
		},
		bscTestnet: {
			url: process.env.BSC_TESTNET_URL || "",
			chainId: 97,
			accounts: {
				mnemonic: process.env.MNEMONIC || "",
				path: "m/44'/60'/0'/0",
				initialIndex: 0,
				count: 50,
				passphrase: "",
			},
		},
		hardhat: {
			allowUnlimitedContractSize: false,
			accounts: {
				mnemonic: process.env.MNEMONIC || "",
				path: "m/44'/60'/0'/0",
				initialIndex: 0,
				count: 5,
				passphrase: "",
			},
			// accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],


			forking: {
				// url: process.env.BSC_TESTNET_URL || "",
				// url: process.env.GOERLI_URL || "",
				url: process.env.ETH_URL || "",
				// blockNumber: 14679873,
			}
		},
		gananche: {
			url: "http://localhost:7545",
			chainId: 1337,
			accounts: {
				mnemonic: process.env.MNEMONIC || "",
				path: "m/44'/60'/0'/0",
				initialIndex: 0,
				count: 50,
				passphrase: "",
			},
		}
	},

	etherscan: {
		apiKey: {
			mainnet: process.env.ETHERSCAN__MAINNET_API_KEY || "",
			bscTestnet: process.env.ETHERSCAN__BSC_API_KEY || "",
			goerli: process.env.ETHERSCAN__MAINNET_API_KEY || "",
		},
	},


	solidity: {
		compilers: [
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 88888,
					}
				}

			},
			{
				version: "0.8.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 87678,
					}
				}

			},
			{
				version: "0.4.26",
			},
			{
				version: "0.5.16",
			},
			{
				version: "0.6.12",
			}
			,
			{
				version: "0.6.6",
			}
		]
	},

};

export default config;
