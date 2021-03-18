
function numberToTitle(num) {
    let res = "";
    while (num>0){
        if (num%26==0){
            res = 'Z' + res;
            num = num/26 -1;
        }else{
            res = char(num%26 -1 + 'A') + res;
            num = num/26;
        }
    }
    return res;
}
let a=28;
console.log(numberToTitle(a));