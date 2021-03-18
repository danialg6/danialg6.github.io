/**
 * 
 * @param {Array} arr array 
 * @return {Number} numbers
 */
function findPairWithMinSumBruteForce( arr){
    if(arr.length<2)
        return;
    // Suppose 1st two element has minimum sum
    let minimumSum=arr[0]+arr[1];
    let pair1stIndex=0;
    let pair2ndIndex=1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let tempSum=arr[i]+arr[j];
            if(Math.abs(tempSum) < Math.abs(minimumSum))
            {
                pair1stIndex=i;
                pair2ndIndex=j;
                minimumSum=tempSum;
            }
        }
    }
    return arr[pair1stIndex]+" ,"+arr[pair2ndIndex];
}
let nums= [4,2, -1,3,-2,-3];// [2,-2];
console.log(findPairWithMinSumBruteForce(nums));