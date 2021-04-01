"use strict";
/*eslient-disable*/

function factorial(n){
    if(n===1){
    return 1;
    }else{
        return n*factorial(n-1);
    }
}
let a=5;
console.log(factorial(a));