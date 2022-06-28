
//event loop

const {readFile} = require('fs');

console.log("started a first task");
//Read Files 
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed first task");
});
console.log("Started next task");
