"use strict";
/**
 * 
 * @param {number} n num 
 * @returns {number} number
 */
function sum(n){
if(n===0){
return 0;
}else if(n<0){
    return n+sum(n+1)
}else{
    return n+sum(n-1);
}
}
let n1=-3;
let n2=5;
console.log(sum(n1));
console.log(sum(n2));