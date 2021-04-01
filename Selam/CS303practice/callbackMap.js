"use strict";

function myFilter(arr,fn){
    let result = [];
    for(let i =0;i<arr.length;i++){
    let callbackResult = fn(arr[i],i);
    if(callbackResult){
    result.push(arr[i]);
    }
    }
    return result;
    }
    function triple(value){
    return value%2===0
    };
    
