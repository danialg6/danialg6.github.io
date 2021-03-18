/**
 * Write a function
 * to count total number of
 * duplicate elements in an array.
 */
function numberOfDuplication(arr1) {
    let arr=arr1.sort((a,b)=>a-b);
    let countDuplicate = 0;
  //let countEach=0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) 
      countDuplicate++;
  }
  return countDuplicate;
}
function isExist(arr,n){

}
// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }

  let arr=[2,1,1,1,1,1,2,3]
  console.log(numberOfDuplication(arr))