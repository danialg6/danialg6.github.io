"use strict";
//Working with prototype

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? (3)

  /* 
  ANSWER:Working with prototype

  true, taken from rabbit.
null, taken from animal.
undefined, there’s no such property any more.

  */

//Searching algorithm