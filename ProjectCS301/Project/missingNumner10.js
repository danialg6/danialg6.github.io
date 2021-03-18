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
