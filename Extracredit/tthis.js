"use strict";
/*eslient-disable*/
function foo() { console.log(this); }
const bob = {
log: function() {
console.log(this);
}
};
console.log(this); // this generally is window object
foo(); //foo() is called by global window object
bob.log();