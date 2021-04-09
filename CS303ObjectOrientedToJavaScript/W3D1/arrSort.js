"use strict";
/*eslient-disable*/
let user=[{name:"MDani",age:25},{name:"Dani",age:20}];
//user.sort((a,b)=>a.name>b.name?1:-1);//Dani,MDani
user.sort((a,b)=>a.name<b.name?1:-1);//MDani,Dani
//user.sort((a,b)=>a.age>b.age?1:-1);//20,25 ascending order
//user.sort((a,b)=>a.age<b.age?1:-1);//25,20 descending oder
console.log(user);