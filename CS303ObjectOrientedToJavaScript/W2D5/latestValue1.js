"use strict";
/*eslient-disable*/

//Q1

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

//Q2

//Which variables are available?
/*
function makeWorker() {
  let name = "Pete";
  return function() {
    alert(name);
  };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // what will it show?

///Answer

The answer is: Pete.

The work() function in the code below gets name from the 
place of its origin through the outer lexical environment reference:
So, the result is "Pete" here.
But if there were no let name in makeWorker(),
 then the search would go outside and take the global 
 variable as we can see 
from the chain above. In that case the result
 would be "John".
*/

//Q3
//Are counters independent?
/* 
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

//Answer

The answer:yes counters are independent, the values are  0,1.

Functions counter and counter2 are created by different 
invocations of makeCounter.

So they have independent outer Lexical Environments,
 each one has its own count.
*/

//Q4
/*
//Counter object
//Answer: the ut put is 1,2,1;
Surely it will work just fine.
Both nested functions are created within the same outer Lexical Environment, 
so they share access to the same count variable: 
*/
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };

  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

///Q5

/*
//Function in if
Look at the code. What will be the result of the call at the last ?

Answer: The result is error
The function sayHi is declared inside the if, so it only lives inside it. 
There is no sayHi outside.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
*/

//Q6
//Sum with closures
/*
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).
For instance:
sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum(a) {

  return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4

//Q7
//Is variable visible?

//Answer:The result is: error, because we can't access "x" before initialization
function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();