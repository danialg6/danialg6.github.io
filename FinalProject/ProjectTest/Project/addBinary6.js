
function addBinary1(bin1,bin2){
    let sum="";
    let carry=0
    let i=bin1.length-1;
    let j=bin2.length-1;
    while(i>=0||j>=0){
        sum=String(bin1[i]^bin2[j]^carry)+sum
        if(bin2[i]===bin2[j] &&bin1[i]!==String(carry)){
            carry=Number(!carry)
        }
        i--;
        j--;
    }
    return carry?(String(carry)+sum):sum    
}
///using built in method
let  addBinary = function(a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
};
console.log(addBinary("110010","001001"))
console.log(addBinary1("110010","001001"))


