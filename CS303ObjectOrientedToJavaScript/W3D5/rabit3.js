"use strict";
//Where it writes?
let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  console.log(rabbit.eat());
  /* 
  The answer: rabbit.

That’s because this is an object before the dot,
 so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, 
then executed with this=rabbit.
  */