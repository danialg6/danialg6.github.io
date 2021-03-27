"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests
  //array methods
  //filter range 1

  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr1 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr1, 1, 4);
  
  console.log( filtered ); // 3,1 (matching values)
  
  console.log( arr1 ); // 5,3,8,1 (not modified)

  //Filter range "in place" 2
  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
  
  console.log( arr2 ); // [3, 1]

  //Sort in decreasing order 3
  let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

console.log( arr3 );

//Copy and sort array 4

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  console.log( sorted );
  console.log( arr4 );

  //Create an extendable calculator 5

  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
  let calc = new Calculator;

//alert( calc.calculate("3 + 7") ); // 
  console.log(calc.calculate("3 + 7"));//10


  //Map to names 6

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary

//Map to objects 7

let johnn = { name: "John", surname: "Smith", id: 1 };
let petee = { name: "Pete", surname: "Hunt", id: 2 };
let maryy = { name: "Mary", surname: "Key", id: 3 };

let userss = [ johnn, petee, maryy ];

let usersMapped = userss.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // John Smith

//Sort users by age 8

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let johhn = { name: "John", age: 25 };
  let pette = { name: "Pete", age: 30 };
  let marry = { name: "Mary", age: 28 };
  
  let arr5 = [ pette, johhn, marry ];
  
  sortByAge(arr5);
  
  // now sorted is: [john, mary, pete]
  console.log(arr5[0].name); // John
  console.log(arr5[1].name); // Mary
  console.log(arr5[2].name); // Pete

  //Shuffle an array 9

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr6 = [1, 2, 3];
  shuffle(arr6);
  console.log(arr6);

  //Get average age 10

  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let jjohn = { name: "John", age: 25 };
  let ppete = { name: "Pete", age: 30 };
  let mmary = { name: "Mary", age: 29 };
  
  let arr7 = [ jjohn, ppete, mmary ];
  
  console.log( getAverageAge(arr7) ); // 28

  //Filter unique array members 11

  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O
//Create keyed object from array
//num 12
let uusers = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  //let usersById = groupById(users);
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }  
  let usersById = groupById(uusers);
  console.log(usersById);
