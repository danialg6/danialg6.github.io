/**
 * 13. Given an array of integers and an integer k, find out whether there are two distinct 
 * indices i and j in the array such that nums[i] = nums[j] and the absolute difference
 *  between i and j is at most k.
#contains_duplicate_ii
Input Output 
nums=[1,2,3,1], k=3 true nums=[1,0,1,1], k=1 true nums= [1,2,3,1,2,3], k=2 false
 */
function containDuplication(arr,k){
    if(arr.length===0)
    return false;
    let index1=0;
    let index2=0
    for(let i=0;i<arr.length;i++){
       for(let j=i+1;j<arr.length;j++){
          if(arr[i]===arr[j]){
            index1=i;
            index2=j
          }      
       }
       if(index2-index1<=k) return true;
    }
    return false;
}
let nums=[1,2,3,1], k=3
console.log(containDuplication(nums,k))
nums=[1,2,3,1,1,1], k=5
console.log(containDuplication(nums,k))
nums=[1,0,1,1], k=1 
console.log(containDuplication(nums,k))
nums=[1,2,3,1,2,3], k=2
console.log(containDuplication(nums,k))