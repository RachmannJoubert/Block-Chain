const SHA256 = require('crypto-js/sha256');
const { Blockchain } = require('./Blockchain');

class Block {
    
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = this.setDate();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash;
        this.nonce = 0;
    }

    setDate() {
        var date = new Date();
        var currentDateTime = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
                            + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        
        return currentDateTime;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}

module.exports.Block = Block;