// "use strict";
// const animal={
//     eat:"food",
//     drink:"water"
// }
// //const human=Object.create(animal);
// const human={
//     think:"great",
//     __proto__: animal
// };
// //human._proto_=animal;
// //console.log(human);
// //console.log(human.valueOf());
// console.log(human.eat);
// //console.log(human.constructor);


// //let person1 = new human.constructor('Karen', 'Stephenson', 26, 
// //'female', ['playing drums', 'mountain climbing']);
// //console.log(person1);

let animal = {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
     // console.log("Hey Momi");
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  rabbit.walk(); // Rabbit! Bounce-bounce!
  animal.walk(); // Rabbit! Bounce-bounce!