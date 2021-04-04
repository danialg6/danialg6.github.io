"use strict";
//let node1 = {value :50, next: null};
//let head = {value: 10, next: node1};

//Rewrite this list of 2 nodes to be a single declaration, that is 
//rewrite it to be
 //an equivalent list without the node1 variable.
 //num1
 let head={value:50,next:{value :50, next: null}};
 console.log(head);
 //node1 = {value 50:, next: null};
//head = {value: 10, next: node1};

//Declare a new node, node2, with value 15.  Modify node1 to add 
//node2 to the end of the list.
//num2
let node2= {value: 15, next: null};//
let node1 = {value: 50, next: node2};
let headd = {value: 10, next: node1};

console.log(node1);
//num3
//Add a node with value 5 to the beginning of the list
node1 = {value: 50, next: null};
head = {value: 10, next: node1};
node5={value:5,next:head};//

//num4
//Insert a node with value 8 in the middle of the list
node1 = {value :50, next:  null};
nodemidle={value:8,next:node1}//
head = {value: 10, next:  nodemidle};

//num5
//Use the spread operator to clone arr1:
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; 

//num 6
let name = "John";
function sayHi() { alert("Hi, " + name); }
name = "Pete";
sayHi(); // what will it show?Answer:pete
//num7
function makeWorker()
{ let name = "Pete";
    return function() { alert(name); };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // what will it show?Answer: pete

//num 8
// Cut and paste here the code you wrote for the recursive function 
// to print “name: value” to the console for every node in the html tree 
// data structure. 
// (Part II of the first recursion assignment)
et node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   }
   function name(){
       if node.value=null{
           return name
        }else{let name=" ";
        let i=0;
        let node=" ";
            for(let i=1,i<3;i++){
            nodei.value+=name;
        }
        return node;
   }

//num 9
// Cut and paste here the code from your implementation of the bank.js 
// debit method if you have completed that.
bank.debit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}


 






