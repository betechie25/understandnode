
//npm --v
//package.json   npm init or npm init -y
//install package npm i <package_name>
//Install external package loadash and know how to use it

const _ = require('lodash');
const items= [1,[2,[3,[4]]]];
const newitems =  _.flattenDeep(items);
console.log(newitems);
console.log("hello people!!!");
