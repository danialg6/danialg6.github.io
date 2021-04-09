"use strict";
/*eslient-disable*/
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

//Use the map function to map the people array to the following:
// [{ fullName: "John Smith", age: 10 },
// { fullName: "Pete Hunt", age: 20 },]


let mapped=people.map(elements=>({fullname:`${elements.name}${elements.surname}`,
age:elements.age}));
console.log(mapped);
//
console.log("-------------------");
//"use strict";
function a() {
    console.log(this);}
    const b = {
    dog: 'fido',
    log: function() {
    console.log(this); }}
    console.log(this); // this generally is window object
    a(); // a() is called by global window object in non-strict mode
    b.log(); // log() is called by a object
    let mylog = b.log;
    mylog();