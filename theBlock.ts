import SHA256 from "crypto-js/sha256";

interface transaction {
  sender: string;
  recipient: string;
  quantity: number;
}
export class CryptoBlock {
  index: number;
  timestamp: Date;
  data: transaction;
  precedingHash: string;
  hash: string;
  nonce: number;
  constructor(
    index: number,
    timestamp: Date,
    data: transaction,
    precedingHash = " "
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0
  }
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty: number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}


