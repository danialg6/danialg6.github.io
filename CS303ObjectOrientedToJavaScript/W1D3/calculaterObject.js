"use strict";
/**
 *  * @returns {Calculator} constructor function
 */
function Calculator(){
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum=function(){
       return this.value1+this.value2;
    };
    /**
     * 
     * @returns {Number} multiplication;
     */
    this.mul=function(){
        return this.value1*this.value2;
    }
};  

