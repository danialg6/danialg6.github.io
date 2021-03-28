let arr=["hello","hi"];

//let first=arr[0];
//let second=arr[1];

//let[first,second]="hello,hi".split(",");
//let[first,second]=arr;
//console.log(first);

//
let mom=["dad","mom","yes","Mariamey"];
//let[first,,title]=mom;//o/p=yes
//console.log(title);

//
let users={};
[users.name,users.surname]="Dani Berhe".split(" ");
//console.log(users);

//...rest
//typeof rest is Array
//let str=["momi","date","dad","Mariamey"];
//let[fsirst,ssecond,...rest]=str;
//console.log(rest[1]);
//console.log(rest);

//Destructuring assignment -- missing and default values
let[firstname,lastname="anonymous"]=[];
//console.log(firstname);//undefined
//console.log(lastname);//anonymous

let[momiye="abc",dad="yes"]=["julious"];
//console.log(momiye);//julious
////Destructuring assignment -- missing and default values
const team = [ "Bob", "Fred", "Jim"];
let[ab,cd,de]=team;
console.log((ab,cd,de).toUpperCase());


//Object destructuring
let options={title:"Menu",width:100,height:200};
let{title,width,height}=options;
console.log(title);//Menu
console.log(width);//100
console.log(height);//200

//Destructure property to another name

let obj={width:300,height:500,ttitle:"Javascript"};
let{width:w,height:h,ttitle:t}=obj;
//console.log(ttitle);//undefined, because it's name is changed to t
console.log(t);//javascript

//wrap destructuring expression in parentheses (---)
let tittlle,widdth,heighht;
// error in this line
//{tittle, widdth, heighht} = {tittlle: "Menu", widdth: 200, heighht: 100};
// ok now
({tittlle, widdth, heighht} = {tittlle: "Menu", widdth: 200, heighht: 100});
console.log(tittlle);


//
//can pass parameters as an object, and the function destructures them into parameters:
let options = {
title: "My menu",
items: ["Item1", "Item2"]
};
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// title, items – taken from options,
// width, height – defaults used
alert( `${title} ${width} ${height}` ); // My Menu 200 100
alert( items ); // Item1, Item2
}
showMenu(options);


///arary
const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed