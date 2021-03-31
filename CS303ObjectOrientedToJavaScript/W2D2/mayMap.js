"use strict";
// //map
/**
 * 
 * @param {object} arr array 
 * @param {function} fn function
 * @returns {object} object
 */
function myMap(arr, fn){
    let result ;//= fn(arr);
    let result;//=fn(arr);
    for(let value of arr){
     result=fn(value);
}
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
    
    function myFilter(arr,fn){
        let result;// = fn();
        let result;//=fn(arr);
        for(let value of arr){
         result=fn(value);
    }
        return result;
        }

        function myReduce(arr,fn){
            let result;//=fn(arr);
            for(let value of arr){
             result=fn(value);
        }
            return result;
        }
        // function sumReduce(arr){
        //     let sum=0;
        //     for(let value of arr){
        //         sum=sum+value;
        //     }
        //     return sum;
        // }
        // function myEven(arr){
        //     let result=[];
        //     for(let values of arr){
        //   result.push(values%2===0);
        //       }
        //     return result;
        // }
        
    //     myFilter(arr,function(value,index){
    //     return value%2===0;
    //     });
    //     let arr=[1,2,3,4];
    //     console.log(myFilter(arr,function() {
            
    //     }));
