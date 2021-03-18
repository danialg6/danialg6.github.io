function summaryRanges(arr) {
  let ranges = [];
  let curIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      if (curIndex < 1) {
        ranges.push(arr[i]+"");
        // curIndex = -1;
      } else {
        ranges.push(arr[i-curIndex] + "->" + arr[i]);
        curIndex = 0;
      }
    } else {
      curIndex++;
    }
  }
  return ranges;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));



function summaryRanges(arr) {
  let ranges = [];
  let curIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      if (curIndex < 1) {
        ranges.push(arr[i]+"");
        // curIndex = -1;
      } else {
        ranges.push(arr[i-curIndex] + "->" + arr[i]);
        curIndex = 0;
      }
    } else {
      curIndex++;
    }
  }
  return ranges;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));

// let arr=[3]
// console.log(arr[0]-arr[1])


// let arr=[3]
// console.log(arr[0]-arr[1])
