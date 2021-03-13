/*eslint-disable*/
/**
 * 
 * @param {Array} arr array 
 * @return  {boolean} true or false
 */
 
function isSumOfPrimesEven(arr){
    //let result;
    let sum=0;
    let i=0;
    
    for(i=0;i<arr.length;i++){
        let j=2;
        for(j=2;j<arr[i];j++){
            if(arr[i]%j===0){
                sum=0;
                break;
            }else{
                sum=sum+arr[i];
            
            }
        }
        
    }
    return sum;
}

let arr=[4,3,9];
console.log(isSumOfPrimesEven(arr));