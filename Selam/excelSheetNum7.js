function convertNumberToString(n){
    let charc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result="";
    let index;
    if(n>0){
        while(n>26){
            index=n%26
                result=charc[index-1]+result;
                n=Math.floor(n/26)
        }
        result=charc[n-1]+result;
    }
   
return result
}
let n=676
let c = [1, 26,27,28,29,30,698, 699,700,701];
console.log(c.map(convertNumberToString));
console.log(convertNumberToString(677))
