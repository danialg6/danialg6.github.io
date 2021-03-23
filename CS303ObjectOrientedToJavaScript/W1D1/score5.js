
"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} arr1 array 
 * @param {Array} arr2 array
 * @return {Array} new array
 */
function scoreExams(arr1,arr2){
    let newArr=[];
    for(let i=0;i<arr1.length;i++){    
       let count=0;
        for(let j=0;j<arr1[i].length;j++){
            if(arr1[i][j]===arr2[j]){
                count++;
        }
    }
    newArr.push(count);   
    }
    return newArr;
}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers,correctAnswers));
//scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]