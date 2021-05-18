'use strict';
console.log("Hello node!");
console.log(2+2);

const sum = (...args)=>args.reduce((acc, num) => acc + num, 0);
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;



const fs = require ('fs').promises;
console.log(fs);

fs.readFile ('./text.txt', "utf8").then((data) =>{
    console.log(data);
}).catch((e)=>{
    console.error(e);
});

fs.readFile('./textFile.txt', "utf8").then((data) =>{
    console.log(data);
    return fs.writeFile('./textFile.txt', data);
})
.catch((e)=>{
    console.error(e);
});


const lodash = require ('lodash');
console.log(lodash.random(0, 5));


