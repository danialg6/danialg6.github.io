"use strict";

function averageWords(str){
    let arr1=str.split(" ");
    let sum=0;
    let average=0;
    for(let i=0;i<arr1.length;i++){
        sum=sum+arr1[i].length;
    }
    average=sum/arr1.length;
    return average;
}
let arr="hello i am";
console.log(averageWords(arr));
//console.log(arr.split(""));
let [firstName, surname] = "Ilya Kantor".split(' ');
console.log(firstName);
//
const arr1234 = [1, 2, 3, 4, 5];
let[a, b, ...c] = arr1234;
console.log(a);  //Blank 1. Fill in the blank, read surrounding text.

console.log(b); // Blank 2. Fill in the blank, read surrounding text.

console.log(c);

//
let myObj = {
    myArray: [1, 2, 3],
    anotherArray: [1, 2, 3],
     equals: function() {
     return myObj.myArray === myObj.anotherArray;
     }
    }
    console.log(myObj.equals());
   let myArray= [1, 2, 3];
   let anotherArray= [1, 2, 3];
   console.log( myArray === anotherArray);