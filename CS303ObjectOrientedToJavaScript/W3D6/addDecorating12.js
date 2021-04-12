"use strict";
/*eslient-disable*/
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec


  //2nd methode
  Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  let user = {
    name: "John",
    sayHi() {
      console.log(this.name);
    }
  }
  
  user.sayHi = user.sayHi.defer(1000);
  
  user.sayHi();