"use strict";
/*eslient-disable*/
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  console.log(company.sales[0]);
  console.log(company.sales.length);
  let sum=0;
  let names="";
  for(let i=0;i<company.sales.length;i++){
      sum+=company.sales[i].salary;
      names+=company.sales[i].name+", ";

  }
  console.log(sum/company.sales.length);
  console.log(names);