const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.listen(5000,()=>{
    console.log("App listeing on port 50000....")
})

