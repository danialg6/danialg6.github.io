"use strict";
/*eslint-disable*/
// function display(){
    // console.log("no parameters");
  //  return "ret";
// }
// 
// function display(a, b){
    // console.log(a, b);
// }

function display(){
    console.log(this);
}

let obj = {a:1};
display();