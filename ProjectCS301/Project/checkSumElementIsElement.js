
function checkSumElementIsElement(arr) {
  let sum = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (k === j) continue;
        sum = arr[j] + arr[k];
        if (arr[i] === sum) {
            if(array.indexOf(arr[j])==-1)
                  array.push(arr[j]);
            if(array.indexOf(arr[k])==-1)
                 array.push(arr[k]);
          //sum=0
        }
        sum = 0;
      }
    }
  }
  return array;
}
let arr = [1, 3,7,24,10,78,90,4,34];// result should be 3,4,7,1,24,10 b.c
//3+4=7 so 7 is found in the array ;3+1=4 so 4 is found in the array  ;
//3+7=10 so 10 is found in the array 
console.log(checkSumElementIsElement(arr));
