"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
//num 1
//1

function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log( bound.test ); // what will be the output? why?
  //Answer
  /*
  The answer is: undefined.

The result of bind is another object. It does not have the test property.
  */

//Fix a function that loses "this" 2

//num 2
function askPassword(ok, fail) {
    let password = ok//prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
  
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
      },
    
    };
    let pass="hello"
    askPassword(user.loginOk, user.loginFail);
    let bnd=askPassword.bind(users,)
/* You need the module.exports when testing in node.  Comment it out when 
you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your 
//function names here that you
 //need for the node mocha tests

 //num3
 //Partial application for login
 function askPassword(ok, fail) {
    let password = ok;
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  let ab="rockstar";
  let abc="yes";
  askPassword(ab,abc); // ?

