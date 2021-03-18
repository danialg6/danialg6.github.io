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
