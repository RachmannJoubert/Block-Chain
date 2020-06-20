const { Blockchain } = require('./classes/Blockchain');
const { Block } = require('./classes/Block');

let RC = new Blockchain();

RC.addBlock(new Block(1, this.setDate, { amount: 10 }));

// if(RC.validateChain() == true) {
//     console.log("Blockchain is valid" + JSON.stringify(RC, null, 4))
// } else {
//     console.log("Blockchain is not valid!")
// }

RC.chain[1].data = { amount: 100};

if(RC.validateChain() == true) {
    console.log("Blockchain is valid" + JSON.stringify(RC, null, 4))
} else {
    console.log("Blockchain is not valid!")
}
