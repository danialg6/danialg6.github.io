"use strict";
/*eslient-disable*/
function myMap(arr,fun){
    let newArray=[];
    for(let elements of arr){
    newArray.push(fun(elements))
    }
    return newArray;
    }
    let multByThree=value=>value*3;
    
    let num=[1,2,3,4,5];
    console.log(myMap(arr,multByThree));