let convertStringToNumber = function (val) {
  let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;
  let n=base.length;

  for (let i = 0, j = val.length - 1; i < val.length; i++, j--) {
    result += Math.pow(n, j) * (base.indexOf(val[i]) + 1);
  }
  return result;
}

let c = ["A","AB","ABC","ZY","ABCDEFGH"," "];
console.log(c.map(convertStringToNumber));

