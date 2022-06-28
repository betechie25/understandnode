//File System built in module

//Synchronous

const {readFileSync,writeFileSync} = require('fs');

console.log("start");
//Read Files Synchronously
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

//Write File Synchronously

writeFileSync('./content/result-sync.text', `Here is the result : ${first},${second}`,{flag:'a'});
console.log("Done with this task");
console.log("Starting the next task");