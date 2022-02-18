import store from "../logic/reducers";
import wallet from "./wallet";
import { ContractAddress } from "./address";
import { Networks } from "./constants";
const vestingAbi = require("./abis/Vesting.json");

export const vestingContract = new wallet.web3.eth.Contract(
  vestingAbi["abi"],
  ContractAddress.maticTestnet
);