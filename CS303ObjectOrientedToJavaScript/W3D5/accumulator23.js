"use strict";
// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   console.log(accumulator.value);
function Accumulator(currentValue, increment) {
    this.currentValue = currentValue;
    this.increment = increment;
    /**
     * 
     * @returns current values+ increment
     */
    this.accumulate = function () {
        return this.currentValue += this.increment;
    }
    
}
this.report = function () {
    return this.currentValue;
}

let acu = new Accumulator(5, 10);
let acum = new Accumulator(5, 10);
accumulate();