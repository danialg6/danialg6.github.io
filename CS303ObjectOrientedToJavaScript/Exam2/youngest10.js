"use strict";
/*eslient-disable*/
//10. [5] Return the age of the youngest person from the people array above (question 8) using reduce.
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];
let young=people.reduce((acc,item)=>acc.age<item.age?acc:item);
console.log(young);