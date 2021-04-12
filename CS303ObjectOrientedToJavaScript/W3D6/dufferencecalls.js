"use strict";

const { Console } = require("node:console");

/*eslient-disable*/
function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    Console.console.log();( this.name );
  }
  
  let rabbit = new Rabbit("Rabbit");

  //Question
  /*Answer:
The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.

So only the first call shows Rabbit, other ones show undefined:
  */
  
  rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi();  