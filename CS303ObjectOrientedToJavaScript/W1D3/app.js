"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */

    function Accumulator(initialValue, increment) {
        this.currentValue = initialValue;
      
        this.read = function() {
          this.increment= increment;
        };
      
      }
      
      let accumulator = new Accumulator(1,4);
      console.log(accumulator.currentValue);
      accumulator.read();
      accumulator.read();
      console.log(accumulator.currentValue);



/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
   /*eslient-disable*/
function calculator(){
   // value1:0,
    //value2:0,
  this.getValues=function(op1,op2){
       this.getvalue1=op1;
       this.value2=op2;
   },
   this.sum=function(){
       const total=this.value1+this.value2;
       return total;
   },
   this.mul=function(){
     const total=this.value1*this.value2;
     return total;
   }
 
 };
}
 calculator.getValues(5,10);
 console.log(calculator.sum());
 console.log(calculator.mul());
     