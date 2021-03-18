// function copyChar(str) {
//   //this works as split method
//   let strArr = [];
//   for (let i = 0; i < str.length; i++) {
//     strArr.push(str[i]);
//   }
//   return strArr;
// }
function isVowel(v) {
  let match = /[eaoiyu]/;
  return match.test(v);
}

function reverseVowel(str) {
        str = str.split("");
        let j = str.length - 1;
        let i = 0;
        while (i < j) {
            if (!isVowel(str[i])) {
            i++;
            continue;
            }
            if (!isVowel(str[j])) {
            j--;
            continue;
            }
            let temVowel = str[i];
            str[i] = str[j];
            str[j] = temVowel;
            i++;
            j--;
        }
    str=str.join("");
        return str;
}

let str = "hello";
console.log(reverseVowel(str));
// let match=/[eaoiyu]/;
// console.log(match.test("e"))

// console.log(/^([a-z0-9]{4,})$/.test('ab1')); // false

// console.log(/^([a-z0-9]{4,})$/.test('ab123')); // true

// console.log(/^([a-z0-9]{4,})$/.test('ab1234')); // true
// console.log(/[aeiou]/.test("a")); // true
