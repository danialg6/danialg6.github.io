"use strict";
function perimeter(){
 console.log(this);
 return 4 * this.side;}
 const shape = {side: 5, perimeter: perimeter};
 shape.perimeter;
// console.log(perimeter());
const myPerim = shape.perimeter;
myPerim();
