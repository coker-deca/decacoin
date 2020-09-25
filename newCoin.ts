import { CryptoBlock } from "./theBlock";
import { CryptoBlockchain } from "./theChain";

let decaCoin = new CryptoBlockchain();
decaCoin.addNewBlock(
  new CryptoBlock(1, new Date(), {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50,
  })
);
decaCoin.addNewBlock(
  new CryptoBlock(2, new Date("01/07/2020"), {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100,
  })
);
console.log(JSON.stringify(decaCoin, null, 4));
