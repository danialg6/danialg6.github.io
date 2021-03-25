
/*eslient-disable*/
let calculator={
    value1:0,
    value2:0,
   getValues:function(op1,op2){
       this.value1=op1;
       this.value2=op2;
   },
   sum:function(){
       const total=this.value1+this.value2;
       return total;
   },
   mul:function(){
     const total=this.value1*this.value2;
     return total;
   }
 
 };
 calculator.getValues(5,10);
 console.log(calculator.sum());
 console.log(calculator.mul());