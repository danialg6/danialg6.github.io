"use strict";
/*eslient-disable*/
let prompt=require("prompt-sync")();
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  console.log(`Read: ${readNumber()}`);