"use strict";
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];
//8. [5] Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },
//  { fullName: "Pete Hunt", id: 2 },]
 let counter=0;
 let mapped=people.map((elements)=>({fullname:elements.name+" "+elements.surname,
 id:++counter}));
 console.log(mapped);
 
 