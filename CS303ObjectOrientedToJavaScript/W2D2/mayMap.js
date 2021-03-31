"use strict";
// //map
/**
 * 
 * @param {object} arr array 
 * @param {function} fn function
 * @returns {object} object
 */
function myMap(arr, fn){
    let result = fn(arr);
    return result;
    }
    // function arrTimesthree(arr) {
    //     let result=[];
    //     for(let values of arr){
    //         result.push(values*3);
    //     }
    //     return result;
    // }

    //filter
    
    // function myFilter(arr,fn){
    //     let result = [];
    //     for(let i =0;i<arr.length;i++){
    //     let callbackResult = fn(arr[i],i);
    //     if(callbackResult){
    //     result.push(arr[i]);
    //     }
    //     }
    //     return result;
    //     }
        
    //     myFilter(arr,function(value,index){
    //     return value%2===0;
    //     });
    //     let arr=[1,2,3,4];
    //     console.log(myFilter(arr,function() {
            
    //     }));
