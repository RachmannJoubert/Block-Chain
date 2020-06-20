const { Block } = require('./Block');

class Blockchain {
    
    constructor() {
        this.chain = [this.createGenisisBlock()];
        this.date = this.setDate();
    }

    setDate() {
        var date = new Date();
        var currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        
        return currentDate;
    }

    createGenisisBlock() {
        return new Block(0, this.date, "Genisis Block", "0");
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
}

module.exports.Blockchain = Blockchain;

