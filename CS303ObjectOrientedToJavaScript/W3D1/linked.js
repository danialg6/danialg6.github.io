"use strict";
/*eslient-disable*/
let el4
=
{
value: 4,
next: null};
let el3
=
{
value: 3,
next: el4};
let el2
=
{
value: 2,
next: el3};
let list
=
{
value: 1,
next: el2};
// function display(input){
// if(input.next===null){
//     return 0;
// }else{
//     return input.value+display(input.next)
// }
// }
// console.log(display(list));
function display(root,result=[]){
    result.push(root.name+" "+root.value ) 
    if(root.children!==null){
    for(let node of root.children){
    display(node,result)
    }
    }
    return result
    }
    console.log(display(list))

