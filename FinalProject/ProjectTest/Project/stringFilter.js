let arr=  ["this", "that", "Hi_there", "How_are_you", "this", "that"];
// function filterString(array){
//     let result=[];
//     for(let str of array){
//         if(str.indexOf("_")===-1)
//            result.push(str)
//     }
// return result;
// }

function filterString(array){
return array.indexOf("_")===-1;
}

console.log(arr.filter(filterString));//return type 
//return + - 0;
let array = [32, 33, 16, 40];
 
function checkAdult(age) {
  return age >= 18;
}
console.log(array.filter(checkAdult));

// function filte(arr){
// for(let i=0;i<arr.length();i++){
//     let j=arr[i];
//     for(let k=0;k<j.length-1;k++){
//         if(j[k]==="_"){
//              arr.pop(j);
//         }
//     }
// }
// return arr;
// }



///////////////////////////////////
/*3. Use array map method to map each value of a given array to 
its absolute value. 
Original array Mapped array [-1,3,-4,5,6,9] [1,3,4,5,6,9]*/

let array1= [-1,3,-4,5,6,9];
function absoluteValue(n){
    return n>0? n:-1*n;
}
 let arr4=array1.map(absoluteValue)//map returnt some value
 console.log(arr4)

