"use strict";
function myFind(arr,fun){
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
           return  arr[i];
        }
    }
}
function fun(n) {
    return n>=10
}
const numArray = [5, 11, 1, 33];
console.log(myFind(numArray,fun)) ;
