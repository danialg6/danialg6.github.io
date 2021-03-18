/**
 * 
 * @param {Array} arr1 array 
 * @param {Array} arr2 array
 * @return {number} sum
 */
function sum(arr1,arr2){
    let size1 = arr1.length;
    let size2 = arr2.length;
    let carry = 0,s,r;
    let sum=0;
    if(size1 == size2) {
        let arr3 =[];
        for(let i=arr1.length-1;i>=-1;i--) { 
            if(i==-1) {
                arr3[i+1] = carry;
                //System.out.println(i+1+" "+arr3[i+1]);
            } else {
                sum = arr1[i] + arr2[i];
                if(sum>9) {
                    s =sum;
                    r = s % 10;
                    arr3[i+1] = carry + r;
                    carry = 1;
                    //System.out.println(i+" "+arr3[i]);    
                } else {
                    if(sum==9 && carry==1) {
                        s =sum+carry;
                        r = s % 10;
                        arr3[i+1] = r;
                    } else {
                        arr3[i+1] = sum+carry;
                        carry=0; 
                    }
                    //System.out.println(i+" "+arr3[i]);
                }  
            }      
        }
        return arr3;
    } else if (size1>size2) {
       let arr3 =[];
       let diff = arr1.length - arr2.length;
       for(let i=arr1.length-1;i>=-1;i--) {
           if(i==-1) {
               arr3[i+1] = carry;
           } else {
               if(i>=diff) {
                   sum = arr1[i] + arr2[i-diff];
                    if(sum>9) {
                        s =sum;
                        r = s % 10;
                        arr3[i+1] = carry + r;
                        carry = 1;
                    } else {
                        if(sum==9 && carry==1) {
                            s =sum+carry;
                            r = s % 10;
                            arr3[i+1] = r;
                        } else {
                            arr3[i+1] = sum+carry;
                            carry=0; 
                        }
                    } 
                }  // end of diff i
                else {
                   arr3[i+1] =  arr1[i];
                   carry = 0;
                }
            }      
        }
        return arr3;
    } else {
        let arr3 = [];
        let diff = arr2.length - arr1.length;
        for(let i=arr2.length-1;i>=-1;i--) {
            if(i==-1) {
                arr3[i+1] = carry;
            } else {
                if(i>=diff) {
                    sum = arr2[i] + arr1[i-diff];
                    if(sum>9) {
                        s =sum;
                        r = s % 10;
                        arr3[i+1] = carry + r;
                        carry = 1;
                    } else {
                        if(sum==9 && carry==1) {
                            s =sum+carry;
                            r = s % 10;
                            arr3[i+1] = r;
                        } else {
                            arr3[i+1] = sum+carry;
                            carry=0; 
                        }
                    }  
                }  // end of diff i
                else {
                    arr3[i+1] =  arr2[i];
                    carry = 0;
                }
            }      
        }
    }

        return sum;
}
let num1=[1,1];//[3,4,2];
let num2=[1,2,3];//[4,6,5];
console.log(sum(num1,num2));