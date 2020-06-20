const { Block } = require('./Block');
const { Blockchain } = require('./Blockchain');

class Transactions {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

module.exports.Transaction = Transactions;