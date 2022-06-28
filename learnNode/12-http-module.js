//HTTP built in module

const http= require('http');
const server = http.createServer((req,res)=>{
   // res.write("Hi this is home page");
    //res.end();
   //console.log(req);
   if(req.url==='/'){
        res.end('Welcome to home page')
   }
    if(req.url==='/about'){
        res.end('Welcome to About page')
    }
    res.end(`
    <h1>OOPS!!</h1>
    <p>We cant seem to find the page u are looking for</p>
    `)
})
server.listen(5000);