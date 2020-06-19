// import { Blockchain } from './classes/Blockchain.js';
// import { Block } from './classes/Block.js';

const SHA256 = require('crypto-js/sha256');

class Block {
    
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = this.setDate();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash;
    }

    setDate() {
        var date = new Date();
        var currentDateTime = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
                            + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        
        return currentDateTime;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

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


let RC = new Blockchain();

console.log(JSON.stringify(RC, null, 4));