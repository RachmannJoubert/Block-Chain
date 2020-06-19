class Blockchain {
    
    constructor() {
        this.chain = [this.createGenisisBlock()];
        this.date = new Date();
    }

    getDate() {
        var currentDate = this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();

        return currentDate;
    }

    createGenisisBlock() {
        return new Block(0, currentDate, "Genisis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
}