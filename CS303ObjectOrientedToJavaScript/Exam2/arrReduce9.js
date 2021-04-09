"use strict";
const numArray = [5, 44, 3, 33];
// function small(arr) {
//     let smallest=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest=arr[i];
//         }
//     }
//     return smallest;
// }
// console.log(small(numArray));
let mayReduce=numArray.reduce((acc,item)=>{
    return (acc<item?acc:item)});
    
console.log(mayReduce);