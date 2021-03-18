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
