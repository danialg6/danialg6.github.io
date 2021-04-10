"use strict";
//In the code below we create new Rabbit, and then try to modify its prototype.
//In the start, we have this code:
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
//1.We added one more string (emphasized). What will alert show now?
//Answer:
//true.
//The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, 
//but it does not affect the existing ones.

//2.And if the code is like this (replaced one line)?
//Answer:
/*
false.

Objects are assigned by reference. The object from Rabbit.prototype
 is not duplicated, it’s still a single object referenced both by 
 Rabbit.prototype and by the [[Prototype]] of rabbit.

So when we change its content through one reference, it is visible 
through the other one.
*/

//3.And like this (replaced one line)?
//Answer:
/*
true.

All delete operations are applied directly to the object. 
Here delete rabbit.eats tries to remove eats property from rabbit,
 but it doesn’t have it.
 So the operation won’t have any effect.
*/

//4.The last variant:
//Answer:
/*
undefined.

The property eats is deleted from the prototype,
 it doesn’t exist any more.
*/
