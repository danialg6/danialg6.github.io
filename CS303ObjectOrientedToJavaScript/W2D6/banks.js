
"use strict";
/*eslint-disable*/
function makeAcount() {

    const bank = { transactionsDB: [], };
    return function () {
        return bank
    }
}
let banks = makeAcount()()
banks.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

banks.getCustomer = function (id) {
    let cust = this.transactionsDB.find((customer) => customer.customerId === id)
    return cust
}
banks.debit = function (id, amount) {
    let cust = this.getCustomer(id)
    let balance = this.getBalance(id)
    if (amount < 0)
        return "invalid input"
    if (balance < amount)
        return "insuffiecient balance"
    else {
        this.savTransaction(cust, -1 * amount)
        return "succesfully"
    }
}
banks.getBalance = function (id) {
    let cust = this.getCustomer(id)
    let custBalance = cust.customerTransactions.reduce((sum, item) => sum + item, 0)
    return custBalance;
}
banks.credit = function (id, amount) {
    let cust = this.getCustomer(id)
    this.savTransaction(cust, amount)
    return "succesfully"
}
banks.savTransaction = function (cust, amount) {
    cust.customerTransactions.push(amount)

}

banks.overAllBalance = function () {
    let totalBalance = 0;
    for (let cust of this.transactionsDB) {
        totalBalance += this.getBalance(cust.customerId)
    }
    return totalBalance;
}
console.log(banks.debit(2, 10))
console.log(banks.credit(2, 100))
console.log(banks.debit(2, 1000))
console.log(banks.getBalance(2))
console.log(banks.getBalance(1))
console.log(banks.getCustomer(3))

