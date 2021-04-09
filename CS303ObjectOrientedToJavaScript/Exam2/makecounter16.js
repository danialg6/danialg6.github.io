"use strict";
function makeAccount() {
    let count = 0;
    return function(arg1,arg2) {
        if(arg1==="debit")
        count-=arg2;
       //return count-arg2;
        if(arg1==="add"){
            count+=arg2;
            //return count+arg2;
           
            }
            return count;
        }
    }
    const account1 = makeAccount();
    let a="add";
    let b="debit";
   console.log( account1(a, 10)); //10
   console.log(account1(a, 10)); //20
    console.log(account1(b, 4)); //16