"use strict";
// //map
// /**
//  * 
//  * @param {object} arr array 
//  * @param {function} fn function
//  * @returns {object} object
//  */
// function myMap(arr, fn){
//     let result = [];
//     for(let i =0;i<arr.length;i++){
//     let callbackResult = fn(arr[i],i);
//     if(callbackResult){
//     result.push(arr[i]);
//     }
//     return result;
//     }
//     return result;
//     }
//     console.log(myMap([1,2,3,4,5]));
//      myMap(arr,function(value,index){
//      return value*2;
//      });

    //filter
    
    function myFilter(arr,fn){
        let result = [];
        for(let i =0;i<arr.length;i++){
        let callbackResult = fn(arr[i],i);
        if(callbackResult){
        result.push(arr[i]);
        }
        }
        return result;
        }
        
        myFilter(arr,function(value,index){
        return value%2===0;
        });
        let arr=[1,2,3,4];
        console.log(myFilter(arr,function() {
            
        }));
