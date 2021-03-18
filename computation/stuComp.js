"use strict";
/*esline-disable*/
// 

/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr a given array
 * @returns{​​​​​​​​number}​​​​​​​​ a number
 */
functionfindMinDistance(arr) {​​​​​​​​
letminDistance=0;
letcount=0;
for (leti=0; i<arr.length; i++) {​​​​​​​​
letnum=arr[i];
for (letj=i+1; j<arr.length; j++) {​​​​​​​​
if (num===arr[j]) {​​​​​​​​
count++;
if (minDistance< (j-i)) {​​​​​​​​
minDistance=j-i;
 }​​​​​​​​
 }​​​​​​​​
 
 }​​​​​​​​
 }​​​​​​​​
if (count===0) {​​​​​​​​
return-1;
 }​​​​​​​​ else {​​​​​​​​
returnminDistance;
 }​​​​​​​​
 
}​​​​​​​​
console.log(findMinDistance([7, 1, 3, 4, 1, 7]));
console.log(findMinDistance([3, 2, 1, 2, 3]));

 


// const charges = [{custId: 1,charges:[5,7,3]}, {custId: 2, charges: [20,60,50,30]}]
// console.log(getMax(charges));