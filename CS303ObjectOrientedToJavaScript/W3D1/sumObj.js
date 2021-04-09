"use strict";
let user=[{id:1,price:[1,2]},{id:2,price:[2,3]},{id:3,price:[1,2]},{id:4,price:[2,3]}];
let result=user.find(items=>items.id===3)
console.log(result);
let sum=user.reduce((prev,item)=>item.id+prev,0);
console.log(sum);
let arr=[];
//let sum=0;
for(let i=0;i<user.length;i++){
    let sum=0;
    let k=user[i].price;
    for(let j=0;j<k.length;j++){
//sum=sum+user[i]+k[j];
arr.push(user[i]+k[j]);
    }
}
console.log(arr);