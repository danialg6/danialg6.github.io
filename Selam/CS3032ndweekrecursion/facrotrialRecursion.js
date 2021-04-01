"use strict";

function factorial(n){
    if(n===0||n===1){
    return 1;
    }else{
        return n*factorial(n-1);
    }
}
let a=5;
console.log(factorial(a));
//using normal
function factorailNum(n) {
    let product=1;
    for(let i=n;i>=1;i--){
        product=product*i;
    }
    return product;
}
let num=5;
console.log(factorailNum(5));