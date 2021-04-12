"use strict";
/*eslient-disable*/
///num 1
function person(name){
    this.name=name;
    this.age=25;
}
//those all below are have the same meaning with  this.age=25
person.prototype.age=25;
let p1=new person();
p1.age=25;

//num 2
let animal={
    eat:"fruit",
    jump:"yes"

}
let sheep={
    _proto_:animal
}
//those below have the same meaning with the sheep object
let sheep=Object.create(animal);
sheep._proto_=animal;

//num 3
let animal = {
    eats: true
    };
    function Rabbit(name) {
    this.name = name;
    }
    Rabbit.prototype = animal;//to inherit animal properties to Rabit object
    Rabbit.prototype.sneez=true;//if we need to add sneez property in a function
    let rabbit = new Rabbit("White Rabbit"); //rabbit.__proto__ == animal
    alerconsole.log( rabbit.eats ); // true

    //num 4
    //Object.prototype
    let obj = {};
console.log(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString


//Changing native prototypes
String.prototype.show = function() {console.log(this);};
"BOOM!".show(); // BOOM!

//Borrowing from prototypes
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
    };
    obj.join = Array.prototype.join;
    console.log( obj.join(',') ); // Hello,world!