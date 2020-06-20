const { Block } = require('./Block');
const { Transaction } = require('./Transactions');

class Blockchain {
    
    constructor() {
        this.chain = [this.createGenisisBlock()];
        // this.timestamp = this.setDate();
        this.difficulty = 3;
        this.pendingTransactions = [];
        this.miningReward = 0.5;
    }

    // setDate() {
    //     var date = new Date();
    //     var currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        
    //     return currentDate;
    // }

    createGenisisBlock() {
        return new Block(this.timestamp, "Genisis Block", "0");
    }

    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     newBlock.mineBlock(this.difficulty)
    //     this.chain.push(newBlock);
    // }

    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log("Block successfuly mined! ")
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward) 
    ];
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getAddressBalance(address) {
        let balance = 0;

        for(const block of this.chain) {
            for(const transaction of block.transactions) {
                if(transaction.fromAddress === address) {
                    balance -= transaction.amount;
                }

                if(transaction.toAddress === address) {
                    balance += transaction.amount;
                }
            }
        }
        
        return balance;
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

