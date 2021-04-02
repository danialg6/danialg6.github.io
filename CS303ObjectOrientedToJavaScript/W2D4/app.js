"use strict";
/**
 * @param {String} value to
 * @return{String} value
 */
function TreeNode(value) {
    this.value = value;
    this.descendant = [];
    return this.value;
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendant.push(homer);
homer.descendant.push(bart, lisa, maggie);
//Q1.
console.log(abe.value);
console.log(homer.value);
console.log(bart.value);
console.log(lisa.value);
console.log(maggie.value);
//Q2.
let search1 = "Lisa";
let search2 = "crush";
 
console.log(lisa.value === search1);
console.log(bart.value === search1);