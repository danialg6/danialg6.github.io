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
