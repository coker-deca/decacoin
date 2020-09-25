"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoBlockchain = void 0;
const theBlock_1 = require("./theBlock");
class CryptoBlockchain {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 4;
    }
    startGenesisBlock() {
        return new theBlock_1.CryptoBlock(0, new Date(), { sender: "Tosin Coker", recipient: "The Chain Blood", quantity: 500 }, "0");
    }
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        //newBlock.hash = newBlock.computeHash();
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    }
    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];
            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (currentBlock.precedingHash !== precedingBlock.hash)
                return false;
        }
        return true;
    }
}
exports.CryptoBlockchain = CryptoBlockchain;
