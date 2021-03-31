"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){   
return arr.map(num => num * 2);
}
//const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//console.log(doubleNums(numArray));

function doubleAges(arr){
  arr .map(item => item.age*=2);
  return arr;
    
}
//  const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6},
//   {name: "Lucy", age: 13}, {name:
//     "Barney", age: 80}]
//    console.log(doubleAges(peopleArray));
   //peopleArray.map(doubleAges);

    
function filterEven(arr){
let even=arr.filter(nums=>nums%2===0);
return even;
}
//console.log(filterEven(numArray));

function filterOver10(arr) {
    let even=arr.filter(nums=>nums.age>10);
    return even;
}
//console.log(filterOver10(peopleArray));

function findEvenNum(arr){
let even=arr.find(nums=>(nums%2===0));
return even;
}
//console.log(findEvenNum(numArray));

function findEvenAge(arr){

    let even=arr.find(nums=>(nums.age%2===0));
    return even;
}
//console.log(findEvenAge(peopleArray));

function includesEvenNum(arr){
let even=arr.includes(findEvenNum);
return even;
}
//console.log(includesEvenNum(numArray));

function includesEvenAge(arr){
    let even=arr.includes(findEvenAge);
    return even;
}
//console.log(includesEvenAge(peopleArray));