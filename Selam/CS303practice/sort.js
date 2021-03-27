"use strict";
/*eslint-disable*/

/**
 * @
 */
funciton decreaseOrder(a,b){
    a=""+a;
    b=""+b;
if(a>b){
    return -1;
}
if(a<b){
    return 1
}else{
    return 0;
}
}
let arr=[1,15,2];
arr.sort(decreaseOrder());
console.log(arr);

//console.log(decreaseOrder(arr));