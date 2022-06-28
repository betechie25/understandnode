// OS Built in module

const os = require('os');

//get current user info

const user= os.userInfo();
console.log(user);
// get system uptime

console.log(`System time : ${os.uptime} seconds`);

//other methods

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);