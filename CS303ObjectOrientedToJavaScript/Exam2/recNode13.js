"use strict";
let node4 = { name: "label", children: null};
let node5 = { name: "input", children: null};
let node3 = { name: "p", children: null};
let node2 = { name: "div", children: [node4, node5]};
let node1 = { name: "body", children: [node2, node3]};
function  classAdder(node){
if(node) {
    node.class="classNode";
console.log(node.name+" "+node.children+" "+node.class);  
}if(node.children!==null){
for(let elements of node.children){
   classAdder(elements);
}
}
}
classAdder(node1);
//console.log(node1.class);