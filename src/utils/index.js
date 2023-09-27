import { ethers } from "ethers";
import { supportedChains } from "../constants";

export const isSupportedChain = (chainId) =>
    supportedChains.includes(Number(chainId));

export const shortenAccount = (account) =>
    `${account.substring(0, 6)}...${account.substring(38)}`;

export const getReadOnlyProvider = () =>
    new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/");

    export const contractaddr = "0x46f44F2D1af04D54ab5BCbEF9F4D0Df9baDc1B8C";


