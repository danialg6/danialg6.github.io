"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} arr array 
 * @return {number} sum
 */
function  sum(arr){
let sum=0;
for(let elements of arr){
    sum=sum+elements;
}
return sum;
}

function multiply(arr){
    let product=1;
    for(let elements of arr){
        product=product*elements;
    }
    return product;
} 
console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));