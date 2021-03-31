"use strict";
let arr=[1,2,3,4,5];
let result=arr.reduce(function(sum,item){
    return sum+item;},0);

//return result;
console.log(result/arr.length);