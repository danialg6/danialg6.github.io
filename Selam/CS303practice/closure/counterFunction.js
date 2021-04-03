"use strict";

function makeCounter(){
    let count=0;
    function increement(){
        return count++;
    };
    return increement;
}
let counter1=makeCounter();
let counter2=makeCounter();
console.log(counter1());//0
console.log(counter1());//1
console.log(counter2());//0
console.log(counter1());//2