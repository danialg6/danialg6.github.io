/**
 *  An evenDominated array is an array that has count of even
 * elements in the array more than the odd elements.
 * Write a function that tests if
 * an array is even dominated.
 */
function evenDominated(arr) {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) countEven++;
    else countOdd++;
  }
  if (countEven > countOdd) return true;
  else return false;
}
