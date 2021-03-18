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
