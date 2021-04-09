//"use strict";
function foo(bar, abc, xyz) {
    if (bar < 100) return abc (bar) //less than 100 then result is double the value
    else return xyz (bar); //greater or equal to 100 then result is triple the value
   }
   function apple(input){
       return input*2;
   }
   function banana(input) {
       return input*3;
   }
   console.log(foo ( 100, apple, banana)); //300
   console.log(foo ( 90, apple, banana)); //