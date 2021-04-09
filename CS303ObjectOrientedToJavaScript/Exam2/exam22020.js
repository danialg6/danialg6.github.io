// function foo(bar, abc, xyz) {
//     if (bar < 100) return abc (bar) //less than 100 then result is double the value
//     else return xyz (bar); //greater or equal to 100 then result is triple the value
//     }
//     console.log(foo ( 100, apple, banana)); //300 console.log(foo ( 90, apple, banana)); //180
//     function apple(n){
//         return 2*n;
//     }
//     function banana(n){
//         return 3*n;
//     }
// function sayHi() {
//     console.log('Hello');
//     return function(){console.log("Bye")};
//     }
//     setTimeout(sayHi(), 2000);
// "use strict"
// function perimeter(){ console.log(this);
//     return 4 * this.side;}
// function perimeter(){ console.log(this);
//     return 4 * this.side;}//4*5=20
// const shape = {side: 5, perimeter: perimeter};
// shape.perimeter()
// const myPerim = shape.perimeter
// myPerim() ;//like function calling

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let redda={name: "Redda", surname: "Hunt", age: 6 }
// let people = [ john, pete,redda];
// // [{ fullName: "John Smith", id: 1 },
// //   { fullName: "Pete Hunt", id: 2 },]
// let result=people.map((item)=>{
//     return {fullName:item.name+" "+item.surname,
//         age:item.age
//     }
// }
// )
// let youngest=people.reduce((min,person)=>{
//     if(min.age>person.age)
//     return person
//     else
//     return min
// },people[0])
// //console.log(result)
// console.log(youngest)

// const numArray = [5, 44, 1, 33,-9];
// let min=numArray.reduce((mini,n)=>mini>n?n:mini,numArray[0])
// console.log(min)

// function myFind(arr,callBack){
//     for(let n of arr){
//         if(callBack(n))
//         return n
//     }
// }
// function myFiltter(arr,callBack){
//     let result=[]
//     for(let n of arr){
//         if(callBack(n))
//         result.push(n)
//     }
//     return result
// }
// let arr=[5,58,16,1,23]
// function isPresent(n){
//     return n%2===0

// }
// console.log(myFiltter(arr,isPresent))

// function sumNum(n){
//     if(n===1)
//     return 1
//     else
//     return n+sumNum(n-1)
// }

// let node3 = {
//     name: "p",
//     value: "This is text in the a paragraph",
//     children: null
//     };
//     let node4 = {
//     name: "label",
//     value: "Name",
//     children: null
//     };
//     let node5 = {
//     name: "input",
//     value: "this was typed by a user",
//     children: null
//     };
//     let node2 = {
//     name: "div",
//     value: null,
//     children: [node4, node5]
//     };
//     let node1 = {
//     name: "body",
//     children: [node2, node3],
//     value: null,
//     };
//     function display(root,result=[]){
//     result.push(root.name+" "+root.value )
//     if(root.children!==null){
//     for(let node of root.children){
//     display(node,result)
//     }
//     }
//     return result
//     }
//     console.log(display(node1))

let node5 = {
    name: "input",
    next: null,
  };
  
  let node4 = {
    name: "label",
    next: null,
  };
  
  let node3 = {
    name: "p",
    next: node4,
  };
  let node2 = {
    name: "div",
    next: node3,
  };
  let node1 = {
    name: "body",
    next: node2,
  };
  function print(node, result = []) {
    if (node) {
      result.push(node.name);
    }
    if (node.next !== null) {
      print(node.next, result);
    }
    return result;
  }
  console.log(print(node1));
  node5.next = node2;
  node1.next = node5;
  console.log(print(node1));
  
  ///////////////////////
  function makeAccount() {
    let balance = 0;
    return function (op, amount) {
      if (op === "add") return (balance += amount);
      else if (op === "debit") return (balance -= amount);
    };
  }
  
  // const account1 = makeAccount();
  // console.log(account1("add", 10)); //10
  // console.log(account1("add", 10)); //20
  // console.log(account1("debit", 4)); //16
  
  //////////////////////
  // const numArray = [5, 44, 1, 33];
  // console.log(Math.min(...numArray))
  // console.log(Math.min(numArray))
  
  ///////////////////////
  
  //last queueMicrotask.n
  //using setInterval
  function displayTime(){
      let timer =setInterval(dateFunc,1000);
      function dateFunc(){
          let curD=new Date();
          console.log(curD.getHours()+":"+curD.getMinutes()+":"+curD.getSeconds())
      //     if(curD.getMinutes()>=57)
      //        clearInterval(timer)
       }
  }
  displayTime()
  
  // function displayTime1(){
  //     let timer =setTimeout(dateFunc,1000);
  //     function dateFunc(){
  //         let curD=new Date();
  //         console.log(curD.getHours()+":"+curD.getMinutes()+":"+curD.getSeconds())
  //         timer =setTimeout(dateFunc,1000);
  //         // if(curD.getMinutes()>=3)
  //         //    clearTimeout(timer)
  //      }
  // }
  // displayTime1()
  