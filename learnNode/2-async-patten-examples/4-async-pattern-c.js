//Node library provide util module that have readFile and write File functionality
const {readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const  second = await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/result-write-file',`This is awesome!!: ${first} ${second}`)
        console.log(first,second)
    }catch(error){
        console.log(error);
    } 
}

start();