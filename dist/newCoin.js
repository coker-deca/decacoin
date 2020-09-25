"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theBlock_1 = require("./theBlock");
const theChain_1 = require("./theChain");
let decaCoin = new theChain_1.CryptoBlockchain();
decaCoin.addNewBlock(new theBlock_1.CryptoBlock(1, new Date(), {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50,
}));
decaCoin.addNewBlock(new theBlock_1.CryptoBlock(2, new Date("01/07/2020"), {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100,
}));
console.log(JSON.stringify(decaCoin, null, 4));
