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

module.exports.Block = Block;