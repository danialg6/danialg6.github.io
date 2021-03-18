// function convertNumberToString(n){
//     let charc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result="";
//     let index;
//     while(n>26){
//         index=n%26
//         if(index===0)
//             index=26;
//             result=charc[index-1]+result;
//             n=Math.floor(n/26)
//     }
//     result=charc[n-1]+result;
// return result
// }
// let n=702
// // let c = [1, 26 698, 701];
// // console.log(c.map(convertNumberToString));
// console.log(convertNumberToString(78));
// console.log(convertNumberToString(701));
// console.log(convertNumberToString(702));
// console.log(convertNumberToString(703));
// console.log(convertNumberToString(704));
// function summaryRange(arr) {
//     let result=[];
//       let index=0;
//       for(let i=0,j=arr[0];i<arr.length;i++,j++){
//         //   if(i===arr.length-1 && index===i)
//         //   result.push(arr[index])
//           if(arr[i]===j)
//              continue;
//             result.push(arr[index]+"->"+arr[i-1])
//             index=i;
//             i--;
            
//       }
//       return result;
//   }
// //   let input = [0, 1, 2, 4,5, 7];
// //   console.log(summaryRange(input));
//   let input1 = [0,2,3,4,6,8,9];
//   console.log(summaryRange(input1));
// function summaryRanges(arr){
//     let ranges =[];
//     let count =0;
//     for(let i =0; i<arr.length; i++){
//     if(Math.abs(arr[i]- arr[i+1]) !==1){
//     if(count < 1){
//     ranges.push(String(arr[i])) ;
//     } else {
//     ranges.push(arr[i -count] +"->" + arr[i]) ;
//     count =0;
//     }
//     } else {
//     count++;
    
//     }
//     }
//     return ranges;
    
//    }
//    console.log(summaryRanges([0,1,2,4,5,7] ));
//    console.log(summaryRanges([0,2,3,4,6,8,9] ));
//    console.log(summaryRanges([]));
//    console.log(summaryRanges([-1]));
//    console.log(summaryRanges([0]));
  