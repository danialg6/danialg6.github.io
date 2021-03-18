/**
 * 
 * @param {number} num1 num 
 * @param {number} num2 num 
 * @return {number}
 */
 function addBinary(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const x = parseInt(a[i], 10) || 0;
      const y = parseInt(b[j], 10) || 0;
      const z = x + y + carry;
      i--, j--;
  
      // error handling: non-binary number
      if (z > 3 || z < 0) return console.error("non-binary number");
  
      result = z === 3 || z === 1 ? 1 + result : 0 + result;
      carry = z < 2 ? 0 : 1;
    }
  
    return result;
  }
  let a="1010";let b="1011";
  console.log(addBinary(a,b));
  