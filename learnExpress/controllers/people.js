
let {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({'success':true,'data':people})
}

const createPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true,'people':name})
}

const createPostmanPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true,data:[...people,name]})
}

const updatePeron = (req,res)=>{
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
}

const deletePerson = (req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(400).json({success: false, msg:`No person found with provided ${id}`})
    }
    const newpeople = people.filter((person)=>person.id === Number(id))
    return res.status(200).json({ success: true, data: newPeople })

}

module.exports={
    getPeople,
    createPerson,
    createPostmanPerson,
    updatePeron,
    deletePerson
}