function findPopcornNumber(n) {
     let next_prime=nextPrime(n)
     let next_next_prime =nextPrime(next_prime)
     while(true){
        if(isLastDigit9(next_prime)&&isLastDigit9(next_next_prime)) 
         return next_prime;
         else{
            next_prime=nextPrime(next_prime)
            next_next_prime=nextPrime(next_prime) 
         }
     }      
}
function isPrime(num) {
  if (num == 2) return true;
  let i;
  let n = Math.ceil(num / 2);
  for (i = 2; i < n; i++) {
    if (num % i == 0) return false;
  }
  if (i == n) return true;
}
function isLastDigit9(n) {
  return n % 10 === 9;
}
function nextPrime(n) {
  n++;
  while (true) {
    if (isPrime(n)) return n;
    n++;
  }
}
let n=0;
let m=139;
console.log("Pop corn of "+n+" :"+findPopcornNumber(n));
console.log("Pop corn of "+m+" :"+findPopcornNumber(m));
