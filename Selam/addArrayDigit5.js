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
