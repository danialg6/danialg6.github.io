function reverseNumber(number) {
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
}
function reversedPrime(num){
    let reversed=reverseNumber(num);
for(let i=0;i<reversed;i++){
    if(reversed%i===0){
        return false;
        break;
    }
}
    return true;
}
let num=32;
console.log(reverseNumber(num));