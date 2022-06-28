//Path Built in module

const path = require('path');

//platform related separator
const seppath= path.sep;
console.log(seppath);
// get file path
const filepath = path.join('/content/','subfolder','test.txt');
console.log(filepath);

//get basenameof path
const basepath= path.basename(filepath);
console.log(basepath);

//get absolute path
const absolutepath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutepath);
