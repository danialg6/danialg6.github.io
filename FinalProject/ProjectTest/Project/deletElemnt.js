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
let arr = [3, 6, 2, 4];
console.log(deleteElement(arr, 1));
