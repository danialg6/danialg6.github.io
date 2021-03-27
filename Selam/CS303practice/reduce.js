
let arr=[1,2,4];
let result1=arr.reduce(function(sum,current){return sum+current},0);
console.log(result1);

let result2=arr.reduce((sum,current)=>sum+current,0);
console.log(result2);