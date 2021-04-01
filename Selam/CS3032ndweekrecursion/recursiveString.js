"use strict";

function count(str,letter) {
    if(str.length===0){
        return 0;
    }if(str[0]===letter){
        return 1+count(str.substr(1,str.length-1));
    }else{
        return count(str.substr(1,str.length-1))
    }
}
let str="hellodadmoma";
let letter="a";
console.log(count(str,letter));