"use strict";
/*eslient-disable*/
//1. Filter through function

//Filter inBetween

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//Filter inArray
/**
 * 
 * @param {Object} arr is array 
 * @returns{Object} return function
 */
 function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
//   let arrr = [1, 2, 3, 4, 5, 6, 7];
//   console.log( arrr.filter(inArray([1, 2, 10])) ); // 1,2

  //Sort by field
  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  // by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
//
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

//
//Army of functions
// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//         let shooter = function() { 
//             console.log("I am shooter ", i); 
//             return i;
//             };
//       shooters.push(shooter); // and add it to the array
//       i++;
//     }
  
//     // ...and return the array of shooters
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   // all shooters show 10 instead of their numbers 0, 1, 2, 3...
//   army[0](); // 10 from the shooter number 0
//   army[1](); // 10 from the shooter number 1
//   army[2](); // 10 ...and so on.

 /**
   * 
   * @returns{Object} return array of function 
   */
  function makeArmy() {
    let shooters = [];
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        return i ; 
      };
      shooters.push(shooter);
    }
    return shooters;
  }
 