"use strict";
/*eslient-disable*/
//Add method "f.defer(ms)" to functions
// function Dispaly(name){
//     this.name=name;
//     this.age=25;
// }

// let display=new Dispaly();
// display.defer="ms";
// console.log(display.defer);
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec