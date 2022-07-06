const express = require('express')
const app = express();

//req =>middleware =>response

const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next(); // method to terminate middleware else need to write re.send()
}

// no need to pass req,res as a arguments to logger . express does it by default for us
app.get('/', logger, (req,res)=>{    
    res.send('Home Page')
})

app.get('/about',logger, (req,res)=>{
    res.send('About Page')
})

app.listen(5000,()=>{
    console.log("Listening to port 5000...")
})