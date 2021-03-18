function gcdString(str1, str2) {
  let gcd = "";
  if (str2.length > str1.length) {
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }
  let len = str2.length;
  let i = 0;
  while (i < str1.length) {
    if (str2 === str1.substring(i, i + len)) gcd = str2;
    i++;
  }
  return gcd;
}
let str1= "ABCABC"
let  str2="ABC"
console.log(gcdString(str1,str2))
str1="ABABAB", str2="ABAB"
console.log(gcdString(str1,str2))
str1="ABCDEF", str2="ABC"
console.log(gcdString(str1,str2))
str1="ABXCDEF", str2="ABC"
console.log(gcdString(str1,str2))
// let char1 = "ru";
// let char2 = "ruty";
// console.log(char1 === char2.substring(0, 2));
