"use strict";
/**
 * @param {String} value to
 * @return{String} value
 */
function TreeNode(value) {
    this.value = value;
    this.descendant = [];
    return this.value;
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendant.push(homer);
homer.descendant.push(bart, lisa, maggie);
//Q1.
console.log(abe.value);
console.log(homer.value);
console.log(bart.value);
console.log(lisa.value);
console.log(maggie.value);
//Q2.
let search1 = "Lisa";
let search2 = "crush";
 
console.log(lisa.value === search1);
console.log(bart.value === search1);

///Q
"use strict";
/*eslint-disable*/
const bank = {
    transactionDB: [],
};
bank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
];
bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};
 
bank.getBalance = function (id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance
}
 
bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
}
 
bank.debit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}
 
bank.credit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}
 
bank.totalBalance = function () {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
}
console.log("total balance should be 85: ", bank.bankBalance());
bank.credit(1, 20);
bank.debit(1, 1000);
console.log("total should now be 105: ", bank.bankBalance());