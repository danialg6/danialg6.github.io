/**
 * 
 * @param {number} n num
 * @return {number} number 
 */

    function findPorcupineNumber( num) {
		let num1 =num + 1;
		let lastDigit;
		let primeNum,newPrime = 0;
		while (true) {
			// find the prime number which is greater than the given number

			primeNum = findPrimeNumber(num1);
			newPrime=primeNum;
			// prime number found .Now lets check the last digit of the prime
			// Number which we have found
			lastDigit = primeNum % 10;
			if (lastDigit == 9) {
				// find leading prime number
				newPrime = findPrimeNumber(primeNum);
				lastDigit = newPrime % 10;
				// check the last digit
				if (lastDigit == 9) {
					// finally porcupine number is found
					return primeNum;

				}
			}
			num1 = newPrime;

		}
	}
/**
 * 
 * @param {number} num number 
 * @return {number} number
 */
	function findPrimeNumber(num) {
		let i = num + 1;
		let j;
		while (true) {

			for (j = 2; j < i; j++) {
				if (i % j == 0)
					break;

			}
				if (j == i) {
					return i;
				}
			
			i++;
		}
	}

let pnum=0;
console.log(findPorcupineNumber(pnum));