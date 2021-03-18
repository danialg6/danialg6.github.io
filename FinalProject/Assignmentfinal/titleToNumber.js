/**
 * 
 * @param {String} s string 
 * @return {number} number
 */
function titleToNumber(str) 
{ 
    // This process is similar to  
    // binary-to-decimal conversion 
    let result = 0; 
    for (let i = 0; i < str.length; i++) 
    { 
      //  result *= 26; 
       // result += str.charAt(i) - 'A' + 1; 
        result=  26*result + str[i] - 'A' + 1
    } 
    return result; 
} 
let str="A";
console.log(titleToNumber(str));