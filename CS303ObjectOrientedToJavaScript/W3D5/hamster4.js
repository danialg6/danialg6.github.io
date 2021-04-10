"use strict";
//Why are both hamsters full?
/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
*/

/*
Let’s look carefully at what’s going on in the call speedy.eat("apple").

The method speedy.eat is found in the prototype (=hamster), then 
executed with this=speedy (the object before the dot).

Then this.stomach.push() needs to find stomach property and call
 push on it. It looks for stomach in this (=speedy), but nothing found.

Then it follows the prototype chain and finds stomach in hamster.

Then it calls push on it, adding the food into the stomach of the
 prototype.

So all hamsters share a single stomach!

Both for lazy.stomach.push(...) and speedy.stomach.push(), 
the property stomach is found in the prototype (as it’s not in 
    the object itself), then the new data is pushed into it.

Please note that such thing doesn’t happen in case of a simple 
assignment this.stomach=:
*/
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>