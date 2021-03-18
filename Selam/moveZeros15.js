function moveZero(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      for (let j = i; j < len; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
    }
  }
  return arr;
}

let input = [0, 1, 0, 12, 3];
input = moveZero(input);
console.log(input);
