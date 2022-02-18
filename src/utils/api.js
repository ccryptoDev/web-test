import web3 from "web3"
import { vestingContract } from "./contracts";

export const claimReward = async (userAddress) => {
  try {
    const tx = await vestingContract.methods
      .ASelfClaimToMyWallet()
      .send({ from: userAddress });
  } catch (e) {
    console.log("error in fetch liquidity data ", e);
  }
};

export const getClaimableAmount = async (userAddress) => {
  try {
    const res = await vestingContract.methods
      .getReleasableAmount(userAddress)
      .call();
    return res;
  } catch (e) {
    console.log("error in fetch liquidity data ", e);
  }
};