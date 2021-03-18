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
  console.log(addDigitArray([3, 4, 2], [4, 6, 5], addToArray));

  

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


function checkSumElementIsElement(arr) {
  let sum = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (k === j) continue;
        sum = arr[j] + arr[k];
        if (arr[i] === sum) {
            if(array.indexOf(arr[j])==-1)
                  array.push(arr[j]);
            if(array.indexOf(arr[k])==-1)
                 array.push(arr[k]);
          //sum=0
        }
        sum = 0;
      }
    }
  }
  return array;
}
let arr = [1, 3,7,24,10,78,90,4,34];// result should be 3,4,7,1,24,10 b.c
//3+4=7 so 7 is found in the array ;3+1=4 so 4 is found in the array  ;
//3+7=10 so 10 is found in the array 
console.log(checkSumElementIsElement(arr));


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
  let arrays = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(maxSubArraySum(arrays));
  arraa=[-2,1,-3,4,-1,2,1,-5,4];
  console.log(maxSubArraySum(arraa))
  arr=[-2,-1,-3,-4,-1,-2,-1,-5,4];
  console.log(maxSubArraySum(arraa))
  


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
let nums=[1,2,3,1], k=3
console.log(containDuplication(nums,k))
nums=[1,2,3,1,1,1], k=5
console.log(containDuplication(nums,k))
nums=[1,0,1,1], k=1 
console.log(containDuplication(nums,k))
nums=[1,2,3,1,2,3], k=2
console.log(containDuplication(nums,k))


/**
 * Write a function deleteArrayElement that takes two parameters,
 * first an array and second parameter is an array index to delete element from.
 * You should do this without using any inbuilt functions.
 */
 function deleteElement(arr, index) {
    for (let i = index;i<arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    return arr;
  }
  let arra = [3, 6, 2, 4];
  console.log(deleteElement(arra, 1));



  /**
 * Two arrays are considered equal if they have 
 * exact same elements, even if order may differ. Write a 
 * function that tests weather two arrays are equal.
e.g. [1,2,3] is equal to [1,2,3] and [3,1,2] but not
 equal to [1,2] or [2,1,3,4]
 */
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (!findeNumber(arr2, arr1[i])) return false;
    }
    return true;
  }
  function findeNumber(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) return true;
    }
    return false;
  }
  let arr1 = [1, 2, 3, 4];
  let arr2 = [1, 2, 3, 6];
  console.log(isEqual(arr1, arr2));


  /**
 *  An evenDominated array is an array that has count of even
 * elements in the array more than the odd elements.
 * Write a function that tests if
 * an array is even dominated.
 */
function evenDominated(arr) {
    let countEven = 0;
    let countOdd = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) countEven++;
      else countOdd++;
    }
    if (countEven > countOdd) return true;
    else return false;
  }


  let convertStringToNumber = function (val) {
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    let n=base.length;
  
    for (let i = 0, j = val.length - 1; i < val.length; i++, j--) {
      result += Math.pow(n, j) * (base.indexOf(val[i]) + 1);
    }
    return result;
  }
  
  let c = ["A","AB","ABC","ZY","ABCDEFGH"," "];
  console.log(c.map(convertStringToNumber));


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
let n=676
let cs = [1, 26,27,28,29,30,698, 699,700,701];
console.log(cs.map(convertNumberToString));
console.log(convertNumberToString(677))



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
let na=0;
let ma=139;
console.log("Pop corn of "+na+" :"+findPopcornNumber(na));
console.log("Pop corn of "+ma+" :"+findPopcornNumber(ma));


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
  let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log(findMissingNumber(arr));

  
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
  let arr = [3, 5, 6, 7, 8, 9];
  let arr1 = [3, 5, 6, 7, 8, 9, 3, 6, 6, 7, 8, 3, 9, 6, 6];
  console.log(mostFrequnt(arr));
  console.log(mostFrequnt(arr1));
  //console.log(Math.floor(Math.random() * 3));

  

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
  
  let input = [0, 1, 0, 12, 3];
  input = moveZero(input);
  console.log(input);

  
  /**
 * Write a function
 * to count total number of
 * duplicate elements in an array.
 */
function numberOfDuplication(arr1) {
    let arr=arr1.sort((a,b)=>a-b);
    let countDuplicate = 0;
  //let countEach=0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) 
      countDuplicate++;
  }
  return countDuplicate;
}
function isExist(arr,n){

}
// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }

  let arr=[2,1,1,1,1,1,2,3]
  console.log(numberOfDuplication(arr))


  function test(arr) {
    //arr = arr.sort();
    let sum = 0;
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i === j) continue;
        for (let k = 0; k < arr.length; k++) {
          if (k === j) continue;
          sum = arr[j] + arr[k];
          if (arr[i] === sum) {
            if (array.indexOf(arr[j]) == -1) array.push(arr[j]);
            if (array.indexOf(arr[k]) == -1) array.push(arr[k]);
            sum = 0;
          }
          sum = 0;
        }
      }
    }
    return array;
  }
  let arr = [1, 3, 7, 24, 10, 78, 90, 4];
  console.log(test(arr));
  


  // function copyChar(str) {
//   //this works as split method
//   let strArr = [];
//   for (let i = 0; i < str.length; i++) {
//     strArr.push(str[i]);
//   }
//   return strArr;
// }
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
  // let match=/[eaoiyu]/;
  // console.log(match.test("e"))
  
  // console.log(/^([a-z0-9]{4,})$/.test('ab1')); // false
  
  // console.log(/^([a-z0-9]{4,})$/.test('ab123')); // true
  
  // console.log(/^([a-z0-9]{4,})$/.test('ab1234')); // true
  // console.log(/[aeiou]/.test("a")); // true
  


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
  let arr=[1,3,5,6]
  console.log(searchInsertPosition(arr,5))
  arr=[1,3,5,6]
  console.log(searchInsertPosition(arr,2)) 
  

  
  /*1. Write a function that takes an array as input and returns second largest 
element of the array.*/
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  function seconedLargest(arr) {
    let largest = arr[0];
    let seconedLargest = arr[0];
    for (let n of arr) {
      if (n > largest) {
        seconedLargest = largest;
        largest = n;
      } else if (n > seconedLargest) {
        seconedLargest = n;
      }
    }
    return seconedLargest;
  }
  function seconedSmallest(arr) {
    let smallest = arr[0];
    let seconedSmallest = arr[0];
    for (let n of arr) {
      if (n < smallest) {
        seconedSmallest = smallest;
        smallest = n;
      } else if (n < seconedSmallest) {
        seconedSmallest = n;
      }
    }
    return seconedSmallest;
  }
  let arr = [8, 12, 45, 3, 89, 67, 89, 1, 2];
  console.log(seconedLargest(arr));
  console.log(seconedSmallest(arr));
  
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
console.log(isStroboganticNumber(69))
console.log(isStroboganticNumber(101))
console.log(isStroboganticNumber(88))
console.log(isStroboganticNumber(868))

// let arr = [-1, 3, -4, 5, 6, 9];
// function absolute(n) {
//   return n > 0 ? n : 78;
// }
// let newArr = arr.map(absolute);
// console.log(newArr);



let arr=  ["this", "that", "Hi_there", "How_are_you", "this", "that"];
// function filterString(array){
//     let result=[];
//     for(let str of array){
//         if(str.indexOf("_")===-1)
//            result.push(str)
//     }
// return result;
// }

function filterString(array){
return array.indexOf("_")===-1;
}

console.log(arr.filter(filterString));//return type 
//return + - 0;
let array = [32, 33, 16, 40];
 
function checkAdult(age) {
  return age >= 18;
}
console.log(array.filter(checkAdult));

// function filte(arr){
// for(let i=0;i<arr.length();i++){
//     let j=arr[i];
//     for(let k=0;k<j.length-1;k++){
//         if(j[k]==="_"){
//              arr.pop(j);
//         }
//     }
// }
// return arr;
// }



///////////////////////////////////
/*3. Use array map method to map each value of a given array to 
its absolute value. 
Original array Mapped array [-1,3,-4,5,6,9] [1,3,4,5,6,9]*/

let array1= [-1,3,-4,5,6,9];
function absoluteValue(n){
    return n>0? n:-1*n;
}
 let arr4=array1.map(absoluteValue)//map returnt some value
 console.log(arr4);
    module.exports={findPopcornNumber,isPrime,nextPrime,};

 

