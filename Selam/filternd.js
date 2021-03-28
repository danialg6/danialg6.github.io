const numbers = [1, 5, 18, 2, 77, 108];
let num=[];
num=numbers.filter(item=>item%2===0);
//console.log(num);

let arr=[];

arr=numbers.find(item=>item%2!==0);
console.log(arr);