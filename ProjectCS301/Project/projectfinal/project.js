"use strict";
/*eslient-disable*/
function findPopcornNumber(n) {
  let next_prime=nextPrime(n)
  let next_next_prime =nextPrime(next_prime)
  while(true){
     if(isLastDigit9(next_prime)&&isLastDigit9(next_next_prime)) 
      return next_prime;
      else{
         next_prime=nextPrime(next_prime)
         next_next_prime=nextPrime(next_prime) 
      }
  }      
}
function isPrime(num) {
if (num == 2) return true;
let i;
let n = Math.ceil(num / 2);
for (i = 2; i < n; i++) {
 if (num % i == 0) return false;
}
if (i == n) return true;
}
function isLastDigit9(n) {
return n % 10 === 9;
}
function nextPrime(n) {
n++;
while (true) {
 if (isPrime(n)) return n;
 n++;
}
}
let n=0;
let m=139;
console.log("Pop corn of "+n+" :"+findPopcornNumber(n));
console.log("Pop corn of "+m+" :"+findPopcornNumber(m));


//I add one thing if no number that give as target return -1,-1
//else return the index of the number
function indicesArray(arr, target) {
  let indices = [-1,-1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indices[0]=i;
        indices[1]=j;
        return indices;
      }
    }
  }
  return indices;
}
let nums = [11,7,15,6,2,7];
let target = 9;
let nums1 = [2, 3, 4];
let target1 = 6;
let nums2 = [3, 3];
let target2 = 6;
console.log(indicesArray(nums, target));
console.log(indicesArray(nums1, target1));
console.log(indicesArray(nums2, target2));


//num 3
function mostFrequnt(arr) {
  let count = 0;
  let frequntElement = arr[0];
  let count_element = 0;
  for (let i = 0; i < arr.length; i++) {
    count_element = countElement(arr, arr[i]);
    if (count_element > count) {
      frequntElement = arr[i];
      count = count_element;
    }
  }
  //if all are equl return random values from the given array
  if (count === 0) return arr[Math.floor(Math.random() * arr.length)];
  return frequntElement;
}
function countElement(arr, n) {
  let count = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) count++;
  }
  return count;
}
let arr = [4, 3, 6, 8, 3, 8, 4, 9, 6, 4];
let arr1 = [3, 5, 6, 7, 8, 9, 3, 6, 6, 7, 8, 3, 9, 6, 6];
console.log(mostFrequnt(arr));
//console.log(mostFrequnt(arr1));
//console.log(Math.floor(Math.random() * 3));



//num 4
function sumCloseToZero(arr) {
  let element = [];
  let sum = arr[0] + arr[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        element[0] = arr[i];
        element[1] = arr[j];
        return element;
      } else if (abs(sum) > abs(arr[i] + arr[j])) {
        sum = arr[i] + arr[j];
        element[0] = arr[i];
        element[1] = arr[j];
      }
    }
  }
  return element;
}
let abs = (a) => {
  if (a > 0) return a;
  else return -1 * a;
};
console.log(sumCloseToZero([6, 3, 6, 7, 1, -8, -5]));//return 6 and -5
console.log(sumCloseToZero([4,2, -1,3,-2,-3]));//return 2,-2
console.log(sumCloseToZero([11, 3, 10, 7, 1, -8, -5]));//return 7 and -8
console.log(sumCloseToZero([0, 3, 10, 7, -8, -5,1]));//return 0 and 1


//num 5
/**
 * Write a function, that given two arrays 
 * representing two non-negative integers with digits, adds
the two numbers, and return it as an array.
Input Output Explanation
input [3,4,2], [4,6,5]  output [7,0,8]  explanation 342+465=807
input [1,1], [1,2,3] output [1,3,4] explanation 11+123=134
input [1,1], [9,9] output [1,1,0] explanation 11+99=110
 */
function addDigitArray(arr1, arr2, addToArray) {
  let result = [];
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    num1 = num1 * 10 + arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    num2 = num2 * 10 + arr2[i];
  }
  result = addToArray(num1 + num2);
  return result;
}
let addToArray = (n) => {
  let digitArray = [];
  let index = 0;
  while (n > 0) {
    digitArray[index++] = n % 10;
    n = Math.floor(n / 10);
  }
  return digitArray;
};
//console.log(addDigitArray([3, 4, 2], [4, 6, 5], addToArray));
console.log(addDigitArray([3, 4, 2], [4, 6, 5], addToArray));
console.log(addDigitArray([1,1], [1,2,3], addToArray));
console.log(addDigitArray([1,1], [9,9], addToArray));

//num 6

function addBinary1(bin1,bin2){
  let sum="";
  let carry=0
  let i=bin1.length-1;
  let j=bin2.length-1;
  while(i>=0||j>=0){
      sum=String(bin1[i]^bin2[j]^carry)+sum
      if(bin2[i]===bin2[j] &&bin1[i]!==String(carry)){
          carry=Number(!carry)
      }
      i--;
      j--;
  }
  return carry?(String(carry)+sum):sum    
}
///using built in method
let  addBinary = function(a, b) {
  var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
  return dec.toString(2);
};
console.log(addBinary("110010","001001"))
console.log(addBinary1("110010","001001"))

//num 7

function convertNumberToString(n){
  let charc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result="";
  let index;
  if(n>0){
      while(n>26){
          index=n%26
              result=charc[index-1]+result;
              n=Math.floor(n/26)
      }
      result=charc[n-1]+result;
  }
 
return result
}
let numm=676;
let c = [1, 26,27,28,29,30,698, 699,700,701];
console.log(c.map(convertNumberToString));
console.log(convertNumberToString(numm))

//num8
let convertStringToNumber = function (val) {
  let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;
  let n=base.length;

  for (let i = 0, j = val.length - 1; i < val.length; i++, j--) {
    result += Math.pow(n, j) * (base.indexOf(val[i]) + 1);
  }
  return result;
}

let cstr = ["A","AB","ABC","ZY","ABCDEFGH"," "];
console.log(cstr.map(convertStringToNumber));

//num 9

function convertToSingleDigit(arr1) {
  let num1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    num1 = num1 * 10 + arr1[i];
  }
  return num1;
}
function mapNumber(n) {
  if(n===0) return 0;
else if ((n === 1)) return 1;
else if ((n ===6)) return 9;
else if ((n ===9)) return 6;
else if ((n ===8)) return 8;
else return n;
}
function pushToArray(n){
  let arr=[];
  while(n!==0){
      arr.push(n%10)
      n=Math.floor(n/10)
  }
  return arr;
}
function isStroboganticNumber(n){
  let num=pushToArray(n)//put to array forms
  let mapNum=num.map(mapNumber);
  let m=convertToSingleDigit(mapNum);
  return n===m;
}
console.log(isStroboganticNumber("69"));
console.log(isStroboganticNumber("101"));
console.log(isStroboganticNumber("88"));
console.log(isStroboganticNumber("868"));

// let arr = [-1, 3, -4, 5, 6, 9];
// function absolute(n) {
//   return n > 0 ? n : 78;
// }
// let newArr = arr.map(absolute);
// console.log(newArr);

//num 10
/**
 * 10. Given an array containing n distinct numbers
 * taken from 0,1,2,...,n, find the one that is missing from the array.
 */
 function findMissingNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let n = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
       n++;
      continue;
    }
    return n;
  }
}
let arrayy = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(arrayy));

//num 11
/**
 * 11. Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in order.
 *You may assume no duplicates in the array.
 */
 function searchInsertPosition(arr, target) {
  if (arr.length === 0) return 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
    else if(arr[i]>target) return i;
  }
  return arr.length;
}
let arrr=[1,3,5,6]
console.log(searchInsertPosition(arrr,5))
let arrayyy=[1,3,5,6]
console.log(searchInsertPosition(arrayyy,2)) 

//num 12
function maxSubArraySum(arr) {
  let size = arr.length;
  let maxSum = findMin(arr);
  let computedSum = 0;

  for (let i = 0; i < size; i++) {
    computedSum = computedSum + arr[i];
    if (maxSum < computedSum) maxSum = computedSum;
    if (computedSum < 0) computedSum = 0;
  }
  return maxSum;
}
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}
let aray = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(aray));
let arayy=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArraySum(arayy))
let arrray=[-2,-1,-3,-4,-1,-2,-1,-5,4];
console.log(maxSubArraySum(arrray))

//num 13
/**
 * 13. Given an array of integers and an integer k, find out whether there are two distinct 
 * indices i and j in the array such that nums[i] = nums[j] and the absolute difference
 *  between i and j is at most k.
#contains_duplicate_ii
Input Output 
nums=[1,2,3,1], k=3 true nums=[1,0,1,1], k=1 true nums= [1,2,3,1,2,3], k=2 false
 */
function containDuplication(arr,k){
  if(arr.length===0)
  return false;
  let index1=0;
  let index2=0
  for(let i=0;i<arr.length;i++){
     for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
          index1=i;
          index2=j
        }      
     }
     if(index2-index1<=k) return true;
  }
  return false;
}
let numss=[1,2,3,1], k=3;
console.log(containDuplication(numss,k));
let numssi=[1, 2, 3, 1], kk=3;
console.log(containDuplication(numss,kk))
let numms=[1, 0, 1, 1], kkk=1; 
console.log(containDuplication(numms,kkk))
let nnums=[1, 2, 3, 1, 2, 3], klk=2;
console.log(containDuplication(nnums,klk));

//num 14

// function distance(s, w1, w2){ 
//   if (w1 .equals( w2) )
//       return 0 ;
//   let words = s.split(" ");
//   let min_dist = (words.length) + 1;
//   for (let index = 0;
//        index < words.length ; index ++)
//   {

//       if (words[index] .equals( w1))
//       {
//           for (let search = 0; 
//                search < words.length; search ++) 
//           {
//               if (words[search] .equals(w2)) 
//               {
//                   let curr = Math.abs(index - search) - 1; 
//                   if (curr < min_dist) 
//                   {
//                       min_dist = curr ;
//                   }
//               }
//           }
//       }
//   }

//   return min_dist;
// }
// ​
// console.log(smallestWordDistance(s, "hello", "world"));

//num 15

function moveZero(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      for (let j = i; j < len; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
    }
  }
  return arr;
}

let input = ([0, 1, 0, 12, 3]);
input = moveZero(input, [1, 3, 12, 0, 0]);
console.log(input);

//num 16
function isVowel(v) {
  let match = /[eaoiyu]/;
  return match.test(v);
}

function reverseVowel(str) {
        str = str.split("");
        let j = str.length - 1;
        let i = 0;
        while (i < j) {
            if (!isVowel(str[i])) {
            i++;
            continue;
            }
            if (!isVowel(str[j])) {
            j--;
            continue;
            }
            let temVowel = str[i];
            str[i] = str[j];
            str[j] = temVowel;
            i++;
            j--;
        }
    str=str.join("");
        return str;
}

let str = "hello";
console.log(reverseVowel(str));

//num 17

function summaryRanges(arr) {
  let ranges = [];
  let curIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      if (curIndex < 1) {
        ranges.push(arr[i]+"");
        // curIndex = -1;
      } else {
        ranges.push(arr[i-curIndex] + "->" + arr[i]);
        curIndex = 0;
      }
    } else {
      curIndex++;
    }
  }
  return ranges;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));

// let arr=[3]
// console.log(arr[0]-arr[1])

//num 18

function gcdString(str1, str2) {
  let gcd = "";
  if (str2.length > str1.length) {
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }
  let len = str2.length;
  let i = 0;
  while (i < str1.length) {
    if (str2 === str1.substring(i, i + len)) gcd = str2;
    i++;
  }
  return gcd;
}
let str1= "ABCABC"
let  str2="ABC"
console.log(gcdString(str1,str2))
str1="ABABAB", str2="ABAB"
console.log(gcdString(str1,str2))
str1="ABCDEF", str2="ABC"
console.log(gcdString(str1,str2))
str1="ABXCDEF", str2="ABC"
console.log(gcdString(str1,str2))
// let char1 = "ru";
// let char2 = "ruty";
// console.log(char1 === char2.substring(0, 2));


  module.exports={findPopcornNumber,isPrime,nextPrime,indicesArray,mostFrequnt,countElement,sumCloseToZero,
    addDigitArray,addBinary1,addBinary,convertNumberToString,convertStringToNumber,
    convertToSingleDigit,mapNumber,pushToArray,isStroboganticNumber,
    findMissingNumber,searchInsertPosition,maxSubArraySum,findMin,moveZero,isVowel,reverseVowel,
    summaryRanges,gcdString};