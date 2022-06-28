
//(4,5,6,7) files related to this 3 file
//Modules: every file is a module by itself.Encapsulated code(hare code that we want to share)
const names=require('./4-firstModule');
const sayHi= require('./5-utils');

require('./7-mind-granide'); //For functions that alraey called noneed to export and assign some variable

const differentExports = require('./6-alternative-flavours')

console.log(differentExports);
sayHi('prerna');
sayHi(names.name1);
sayHi(names.name2);