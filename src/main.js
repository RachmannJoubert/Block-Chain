const { Blockchain } = require('./classes/Blockchain');
const { Block } = require('./classes/Block');

let RC = new Blockchain();

console.log("Mining Block...")
RC.addBlock(new Block(1, this.setDate, { amount: 10 }));
console.log("Mining Block...")
RC.addBlock(new Block(2, this.setDate, { amount: 15 }));
console.log("Mining Block...")
RC.addBlock(new Block(3, this.setDate, { amount: 20 }));

