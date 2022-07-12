const express= require('express');
const app = express()
let {people} = require('./data')



//use static asset
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

//HTTP 'Get Method'

app.get('/api/people',(req,res)=>{
    res.status(200).json({'success':true,'data':people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true,'people':name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true,data:[...people,name]})
})

//HTTP PUT method

app.put('/api/people',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(400).json({success: false, msg:`No person found with provided ${id}`})
    }
   const newpeople = people.map((person)=>{
       if(person.id === Number(id)){
           person.name = name
       }
       return person
   })
   res.status(200).json({success: true, data: newpeople})
})

//HTTP Delete Method

app.delete('/api/people',(req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(400).json({success: false, msg:`No person found with provided ${id}`})
    }
    const newpeople = people.filter((person)=>person.id === Number(id))
    return res.status(200).json({ success: true, data: newPeople })

})

//HTTP 'POST METHOD' (form)
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please provide credentials")
})

app.listen(5000,()=>{
    console.log("Listening on port 5000...");
})