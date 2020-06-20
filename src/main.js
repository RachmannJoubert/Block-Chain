const { Blockchain } = require('./classes/Blockchain');
const { Block } = require('./classes/Block');
const { Transaction } = require('./classes/Transactions');

let RC = new Blockchain();
 RC.createTransaction(new Transaction('address1', 'address2', 100))
 RC.createTransaction(new Transaction('address2', 'address1', 50))

 console.log('Starting Miner...');
 RC.minePendingTransactions("Reward address");

 console.log("Balance of account is: ", RC.getAddressBalance('Reward address'))

 RC.minePendingTransactions("Reward address");

 console.log("Balance of account is: ", RC.getAddressBalance('Reward address'))
