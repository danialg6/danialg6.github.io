"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 

















//"use strict"

// const { Account } = require("./account");
// const { SavingsAccount } = require("./savingsaccount");
// const { CheckingAccount } = require("./checkingaccount");
class Bank{
    static nextNumber=0;
    constructor(){
        Bank.nextNumber++;
        this. _account=[];
    }
    addAccount(){
       this._account.push(new Account(Bank.nextNumber++))
    }
    addSavingsAccount(interest){
        this._account.push(new SavingsAccount(Bank.nextNumber++,interest))
    }
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(Bank.nextNumber++,overdraft))
    }

    closeAccount(number){
        let index=this._account.findIndex((item)=>item._number===number)
        this._account.splice(index,1)
    }
    accountReport(){
      let accountReport=""  
      for(let account of this._account ){
        accountReport+=account.toString()+"\n"
      }
      return accountReport;
    }
}

//exports.Bank = Bank;
//  let bank=new Bank()
//  bank.addAccount()
//  bank.addCheckingAccount(500)
// bank.addSavingsAccount(5)
// console.log( bank.accountReport())
// console.log(new SavingsAccount().toString())





/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;