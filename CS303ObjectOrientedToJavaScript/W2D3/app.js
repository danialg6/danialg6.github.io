"use strict";
/*eslient-disable*/
//sum
module.exports = { sumTo, factorial, fibonacci, outputList, 
    outputListLoop, list2Array, reverseList, reverseListLoop};
"use strict";
/**
 * 
 * @param {number} n num 
 * @returns {number} number
 */
/**
 * 
 * @param {number} n num 
 * @returns {number}
 */
function sumTo(n){
if(n===0){
return 0;
// }else if(n<0){
//     return n+sum(n+1)
 }else{
    return n+sumTo(n-1);
}
}
let n1=15;
let n2=55;
console.log(sumTo(n1));
console.log(sumTo(n2));

//factorial
/**
 * 
 * @param {number} n num 
 * @returns {number}
 */
 function factorial(n){
    if(n===1){
    return 1;
    }else{
        return n*factorial(n-1);
    }
}
let a=5;
console.log(factorial(a));

//fibonacci

/**
 * 
 * @param {number} n num 
 * @returns {number}
 */
 function fibonacci(n){
    if(n===0)
    return 0;
    if(n===1){
    return 1;
}else{
return fibonacci(n-1)+fibonacci(n-2);
}
}
console.log(fibonacci(4));
console.log(fibonacci(3));
console.log(fibonacci(5));