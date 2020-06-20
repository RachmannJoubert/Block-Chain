const { Block } = require('./Block');

class Blockchain {
    
    constructor() {
        this.chain = [this.createGenisisBlock()];
        this.timestamp = this.setDate();
        this.difficulty = 10;
    }

    setDate() {
        var date = new Date();
        var currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        
        return currentDate;
    }

    createGenisisBlock() {
        return new Block(this.timestamp, "Genisis Block", "0");
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    validateChain() {
        for(let i =1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            }
            
            if(currentBlock.previousHash != previousBlock.hash) {
                return false;
            }

            return true;
        } 
    }
}

module.exports.Blockchain = Blockchain;

