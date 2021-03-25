"use strict";
/*eslint-disable*/
/**
 *  * @returns {Calculator} constructor function
 */
function Calculator() {
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum = function () {
        return this.num1 + this.num2;
    };
    /**
     * 
     * @returns {Number} multiplication;
     */
    this.mul = function () {
        return this.num1 * this.num2;
    }
    // /**
    //  * 
    //  * @returns {Number} subtraction;
    //  */
    // this.sub = function () {
    //     return this.a - this.b
    // }
    // /**
    //  * 
    //  * @returns {Number} division;
    //  */
    // this.div = function () {
    //     return this.a / this.b;
    // }
};
/**
 * 
 * @param {*} currentValue 
 * @param {*} increment 
  * @returns {Accumulator} constructor function
 */
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
    /**
     * 
     * @returns the current values
     */
    this.report = function () {
        return this.currentValue;
    }
}
let acu = new Accumulator(4, 6);
let acum = new Accumulator(4, 6);
accumulate();