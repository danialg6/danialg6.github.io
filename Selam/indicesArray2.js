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
