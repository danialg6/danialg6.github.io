"use strict";
//1

function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log( bound.test ); // what will be the output? why?
  //Answer
  /*
  The answer is: undefined.

The result of bind is another object. It does not have the test property.
  */

//Fix a function that loses "this" 2
