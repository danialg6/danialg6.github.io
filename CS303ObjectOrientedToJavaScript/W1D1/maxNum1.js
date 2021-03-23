"use strict";
/*eslint-disable*/
/**
 * 
 * @param {number} num1 num
 * @param {number} num2 num
 * @param {number} num3 num 
 * @return {number} num
 */
function maxOfThree(num1,num2,num3){
    if(num1>num2&&num1>num3){
        return num1;
    }
    if(num2>num1&&num2>num3){
        return num2
    }else{
        return num3;
    }
}
let a=10;
let b=9;
let c=7;
console.log(maxOfThree(a,b,c));