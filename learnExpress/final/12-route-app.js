const express= require('express');
const app = express()

//import people.js from routes
const people = require('./routes/people')

const auth = require('./routes/auth');

//use static asset
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

//set base url for people.js 
app.use('/api/people',people)
app.use('/login',auth)


app.listen(5000,()=>{
    console.log("Listening on port 5000...");
})