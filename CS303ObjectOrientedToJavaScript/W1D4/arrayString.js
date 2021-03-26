"use strict";
/*eslient-disable*/

//• Uppercase the first character
let prompt=require("prompt-sync")();

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log( ucFirst("john") ); // John

  ///Check for spam

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  console.log( checkSpam('buy ViAgRA now') );
  console.log( checkSpam('free xxxxx') );
  console.log( checkSpam("innocent rabbit") );

  //Truncate the text

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
console.log(truncate("hello mom",2));

//Extract the money

function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  console.log(truncate( extractCurrencyValue('$120') === 120 )); // true);

  //Is array copied?
  //answer: no rather it references, both references to the same array
  let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log( fruits.length ); // 4

// Array operations

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

//Calling in an array context

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // a,b,function(){...}

//Sum input numbers

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log( sumInput() );
// A maximal subarray (use the Mocha test file ArrayTests.js in VSCode for this exercise and the
//translate border exercise in the Array methods section)

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([-1, -2, -3]) ); // 0

  //array methods
  //Translate border-left-width to borderLeftWidth

  function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
  console.log(camelize("my-short-string"));


  //filter range

  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr1 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr1, 1, 4);
  
  console.log( filtered ); // 3,1 (matching values)
  
  console.log( arr ); // 5,3,8,1 (not modified)

  //Filter range "in place"
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

  //Sort in decreasing order
  let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

console.log( arr3 );

//Copy and sort array

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  console.log( sorted );
  console.log( arr4 );

  //Create an extendable calculator

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

//alert( calc.calculate("3 + 7") ); // 10
  console.log(calc.calculate("3 + 7"));//10


  //Map to names

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary

//Map to objects

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

//Sort users by age

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let johhn = { name: "John", age: 25 };
  let pette = { name: "Pete", age: 30 };
  let marry = { name: "Mary", age: 28 };
  
  let arr5 = [ pette, johhn, marry ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  console.log(arr5[0].name); // John
  console.log(arr5[1].name); // Mary
  console.log(arr5[2].name); // Pete

  //Shuffle an array

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr6 = [1, 2, 3];
  shuffle(arr6);
  console.log(arr6);

  //Get average age

  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let jjohn = { name: "John", age: 25 };
  let ppete = { name: "Pete", age: 30 };
  let mmary = { name: "Mary", age: 29 };
  
  let arr7 = [ jjohn, ppete, mmary ];
  
  console.log( getAverageAge(arr7) ); // 28

  //Filter unique array members

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

//   function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }
  

//   let userrrs = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(userrrs);
//   console.log(groupById(usersById));
  
 ///sum1
 

let a = +prompt("The first number?");
let b = +prompt("The second number?");
console.log( a + b );

//numinput2

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  console.log(`Read: ${readNumber()}`);
//infinite3

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}
//randomnum4
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  console.log( random(1, 5) );
  console.log( random(1, 5) );
  console.log( random(1, 5) );
//randomnum5
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log( randomInteger(1, 3) );  