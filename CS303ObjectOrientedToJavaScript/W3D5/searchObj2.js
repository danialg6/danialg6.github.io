"use strict";
/*eslient-disable*/
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
    //__proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
   // __proto__: table
  };
  
  let pockets = {
    money: 2000,
   // __proto__: bed
   
  };
  table.__proto__=head;
  bed.__proto__=table;
  pockets.pillow=bed;
  //
  console.log(pockets.pen);//3
  console.log(bed.glasses );//1
  console.log(table.money );//  undefined
  //
console.log(pockets.pillow);
console.log(pockets.money);
console.log(pockets);

//2
//Answer:
/* In modern engines, performance-wise, there’s no difference
 whether we take a property from an object or its prototype. 
 They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where
 they found glasses (in head), and next time will search right there. 
 They are also smart enough to update internal 
caches if something changes, so that optimization is safe.*/

