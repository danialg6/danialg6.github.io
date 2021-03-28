let arr=["hi","mom"];
let result=arr.forEach(function(item){return item.length});
//console.log(result);

//["Bilbo", "Gandalf", "Nazgul"].forEach(function(character){console.log(character.length)} );


let abc=[1,2,3,4,5,6,7,8];
function forea(item){
    if(item%2===0){
        console.log(item);
    }
}
console.log(abc.forEach(forea));