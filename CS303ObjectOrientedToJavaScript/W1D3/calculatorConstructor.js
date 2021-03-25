
// function Calculator() {

//     this.methods = {
//       "*": (a, b) => a * b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
function Accumulator(initialValue, increment) {
    this.currentValue = initialValue;
    this.increment=increment;
  
    this.read = function() {
      this.currentValue += increment;
    };
  
  }
  
  let accumulator = new Accumulator(1,4);
  console.log(accumulator.currentValue);
  accumulator.read();
  accumulator.read();
  console.log(accumulator.currentValue);
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }
//   let calc = new Calculator;
  
//   console.log( calc.calculate("3 + 7") ); // 10
//   console.log( calc.calculate("3 * 7") ); // 21