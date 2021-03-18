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
