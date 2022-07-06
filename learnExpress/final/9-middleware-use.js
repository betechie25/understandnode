const express = require('express')

const app = express();

//Import middleware
const logger = require('./logger')
const authorize = require('./authorize')

//Instead of  passing logger in every route use app.use function

app.use([logger,authorize]);

//or we can write lyk this if we want to pass logger only to specific routes ex: only to api/ routes

//app.use('./api',logger)


// no need to pass req,res as a arguments to logger . express does it by default for us
app.get('/', (req,res)=>{    
    res.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.get('/api/products', (req,res)=>{
    res.send('Products Page')
    console.log(req.user); // from authorize.js
})

app.get('/api/items', (req,res)=>{
    res.send('Items Page')
})

app.listen(5000,()=>{
    console.log("Listening to port 5000...")
})