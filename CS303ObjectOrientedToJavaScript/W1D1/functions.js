"use strict";
/*eslint-disable*/
/**
 * 
 * @param {number} num1 num
 * @param {number} num2 num
 * @param {number} num3 num 
 * @return {number} num
 */
function maxOfThree(num1,num2,num3){
    if(num1>num2&&num1>num3){
        return num1;
    }
    if(num2>num1&&num2>num3){
        return num2
    }else{
        return num3;
    }
}
let a=10;
let b=9;
let c=7;
console.log(maxOfThree(a,b,c));

///2
/**
 * 
 * @param {Array} arr array 
 * @return {number} sum
 */
 function  sum(arr){
    let sum=0;
    for(let elements of arr){
        sum=sum+elements;
    }
    return sum;
    }
    
    function multiply(arr){
        let product=1;
        for(let elements of arr){
            product=product*elements;
        }
        return product;
    } 
    console.log(sum([1,2,3,4]));
    console.log(multiply([1,2,3,4]));
    //3
    /**
 * 
 * @param {Array} arr array
 * @return {number} number
 */
 function findLongestWord(arr){
    let longest=arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>longest){
            longest=arr[i];
        }
    }
return longest;
}
let array=["hi","hello","yes"];
console.log(findLongestWord(array));


///4
/**
 * 
 * @param {Array} arr anrray 
 * @return {Array} new array
 */
 function reverseArray(arr){
    let newArr=[];
for(let elements of arr){
newArr.unshift(elements);
}
return newArr
}
function reverseArrayInPlace(arr){
   let length = arr.length;
  let loop = Math.floor( length/ 2 );
  for ( let i = 0; i < loop; i++ ) {    
    let holdNum = arr[i];
    let swapPos = length - 1 - i;
    arr[i] = arr[swapPos];
    arr[swapPos] = holdNum;
  }
  return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
console.log(reverseArray(["A", "B", "C"]));


///5
/**
 * 
 * @param {Array} arr1 array 
 * @param {Array} arr2 array
 * @return {Array} new array
 */
 function scoreExams(arr1,arr2){
    let newArr=[];
    for(let i=0;i<arr1.length;i++){    
       let count=0;
        for(let j=0;j<arr1[i].length;j++){
            if(arr1[i][j]===arr2[j]){
                count++;
        }
    }
    newArr.push(count);   
    }
    return newArr;
}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers,correctAnswers));
//scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]

//module.module.exports = {maxOfThree,sum,multiply,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams};