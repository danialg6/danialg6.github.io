"use strict";
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
    internals: [{name: 'Jack', salary: 1300}]
    }
    };
    function sum(input){
        if(Array.isArray(input)){
            return input.reduce((prev,item)=>prev+item.salary,0);
        }else{
            let summ=0;
            for(let elements of Object.values(input)){
                summ=summ+sum(elements);
            }
            return summ;
        };
    }
    console.log(sum(company))
