const express = require('express');
const app = express()

//get
app.get('/',(req,res)=>{
    res.status(200).send('Home Page!!')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page!!')
})

//all
app.all('*',(req,res)=>{
    res.status(404).send('Reource not found')
})

//listen
app.listen(5000,()=>{
    console.log("Listening on port 50000...")
})