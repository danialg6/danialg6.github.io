
/**
 * @return {number} ,most frequent number
 */
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let a = 1;
let b = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 b++;
                if (a<b)
                {
                  a=b; 
                  item = arr1[i];
                }
        }
        b=0;
}
console.log(item+" ( " +a +" times ) ") ;