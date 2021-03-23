"use strict";
/*eslint-disable*/
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
return longest.length;
 }
 let array=["hi","hello","yes"];
 console.log(findLongestWord(array));
