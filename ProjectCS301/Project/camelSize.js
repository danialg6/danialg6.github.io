function camelize(str) {
    let result=[];
   str=str.split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
   result.push(str[0])
  for(let i=1;i<str.length;i++){
   result.push(str[i][0].toUpperCase()+str[i].slice(1))
  }
  return   result.join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("hello-world-works-runs"))