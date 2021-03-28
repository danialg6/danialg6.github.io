let now=new Date();
console.log(now);

//// 0 means 01.01.1970 UTC+0
let jan01_1970=new Date(0);
console.log(jan01_1970);

//// now add 24 hours, get 02.01.1970 UTC+0
let jan02_1970=new Date(24*3600*1000);
console.log(jan02_1970);

console.log(( new Date().getTimezoneOffset()) );

////Autocorrection
//let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
//console.log(date); // ...is 1st Feb 2013!

//Let’s say we need to increase the date “28 Feb 2016” 
//by 2 days. It may be “2 Mar” or “1 Mar” in case of a 
//leap-year. We don’t need to think about it. Just add 2 days. 
//The Date object will do the rest:

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); // 1 Mar 2016
console.log(now.getFullYear()-date.getFullYear());
console.log(date.getFullYear()-now.getFullYear());


//Date.parse from a string
//Date.parse(str) returns the timestamp
let ms=Date.parse('2013-01-26T18:00:00.417-21:00');
console.log(ms);
////create a new Date object from the timestamp:
let newDate=new Date(ms);
console.log(newDate);