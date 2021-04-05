"use strict";
bank={ transactionsDB:[],};
bank.transactionDB=[{customerId:1,customerTransactions:[10,50,-40]},
{customerId:2,customerTransactions:[10,10,-10]},
{customerId:3,customerTransactions:[5,5,55]}];

bank.debit(id,amout)=function(id,amount){
    let balance=this.getBalance(id);
    if(balance<0){
        return "insufficient amount";
    }
    if(amount<balance){
        balance=balance-amount;
    }else{
        balance="you can't buy";
    }
}
bank.getBalance=function(id){
    let cust=this.getCustomer(id)
    let balanceSum=cust.customerTransactions.reduce((prev,item)=>prev+item,0);
    return balanceSum;
}
bank.getCustomer=function(id){
    let cust=this.transactionDB.find(item=>item.customerId===id)
    return cust;
} 
    
bank.credit=function(id,amount){
let balance=this.getBalance(id);
balance=balance+amount;
return balance;
}
bank.saveTransaction(id,amount){
    //let cust=this.getCustomer(id);
    id.customerTransactions.push(amount);
}