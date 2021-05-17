'use strict';
console.log("Hello node!");
console.log(2+2);

const sum = (...args)=>args.reduce((acc, num) => acc + num, 0);
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;