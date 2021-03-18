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
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(arr));
arr=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArraySum(arr))
arr=[-2,-1,-3,-4,-1,-2,-1,-5,4];
console.log(maxSubArraySum(arr))
