function convertToSingleDigit(arr1) {
    let num1 = 0;
    for (let i = 0; i < arr1.length; i++) {
      num1 = num1 * 10 + arr1[i];
    }
    return num1;
}
function mapNumber(n) {
    if(n===0) return 0;
  else if ((n === 1)) return 1;
  else if ((n ===6)) return 9;
  else if ((n ===9)) return 6;
  else if ((n ===8)) return 8;
  else return n;
}
function pushToArray(n){
    let arr=[];
    while(n!==0){
        arr.push(n%10)
        n=Math.floor(n/10)
    }
    return arr;
}
function isStroboganticNumber(n){
    let num=pushToArray(n)//put to array forms
    let mapNum=num.map(mapNumber);
    let m=convertToSingleDigit(mapNum);
    return n===m;
}
console.log(isStroboganticNumber(69))
console.log(isStroboganticNumber(101))
console.log(isStroboganticNumber(88))
console.log(isStroboganticNumber(868))

// let arr = [-1, 3, -4, 5, 6, 9];
// function absolute(n) {
//   return n > 0 ? n : 78;
// }
// let newArr = arr.map(absolute);
// console.log(newArr);
