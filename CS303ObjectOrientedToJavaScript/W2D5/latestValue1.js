"use strict";
/*eslient-disable*/
/*Does a function pickup latest changes?

let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi();
///
The answer is: 
yes, it picks the latest changes which is Pete.
A function gets outer variables as they are now, it uses the most recent values.
Old variable values are not saved anywhere. When a function wants a
 variable, it takes the current value from 
its own Lexical Environment or the outer one.
*/

