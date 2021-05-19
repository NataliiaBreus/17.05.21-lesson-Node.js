'use strict';
/*
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

const lodash = require('lodash');
const lorem = require('./lorem');
console.log("INDEX START");
console.log(lorem);
console.log(lodash.random(0, 5));
console.log('INDEX END');


const Component = require('./Component');
const lodash = require('lodash');
require('./styles.css'); */

import lodash from 'lodash';
import './styles.css';
import useless, * as MyMath from './MyMath';
import Component from './Component';
console.log(useless);

console.log(MyMath);

const component = new Component();
component.render();
console.log(lodash.random(0,200));
console.log('test');

