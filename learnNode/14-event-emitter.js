const EventEmitter = require('events')

const customEmitter = new EventEmitter() //object

//First listen for event and than emit it. Order matters

//Listen event 
customEmitter.on('response',(name,id)=>{
    console.log(`data received  for ${name} with id ${id}`)
})


customEmitter.on('response',()=>{
    console.log(`other data received`)
})

// Emit event
customEmitter.emit('response','prerna',34)


