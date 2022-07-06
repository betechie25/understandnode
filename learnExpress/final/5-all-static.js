const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// There are two methods to use:
//1- add as a static asset like we do for css, images
//2- SSR (Server side rendering using template engine like belown res.sendFile)
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
app.get('/about',(req,res)=>{
    res.status(200).send('About Page!!')
})

//all
app.all('*',(req,res)=>{
    res.status(404).send('Reource not found')
})

app.listen(5000,()=>{
    console.log("App listeing on port 50000....")
})

