"use strict";
/*eslient-disable*/
let phrase = "Hello";
//if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
//}
sayHi();

// //onst bank = {    transactionsDB: [],};
// bank.transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }];

// bank.getBalance = function (id) {
//     const customer = bank.transactionsDB.find(customer => customer.customerId === id);
//     let balance = 0;
//     for (const trans of customer.customerTransactions) {    balance += trans;   }
//     return balance;  };

// ///** * @returns {number}  returns sum of all balances */
// // bank.bankBalance = function () { //IMPLEMENT THIS
// //     let sum=0;
// // for(let i=0;i<bank.transactionsDB .length;i++){
// // sum+=bank.getBalance
// // }
// // return sum;
// // }
