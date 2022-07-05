const http = require('http');

//Main app.js (creating dummy here)

const {readFileSync} = require('fs');
//get all files
const homepage = readFileSync('./navbar-app/index.html');
const homestyle = readFileSync('./navbar-app/styles.css');
const homeimg = readFileSync('./navbar-app/logo.svg');
const homelogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    //Home Page
    if(req.url === '/'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write(homepage);
        res.end()
    }
    //styles
    else if(req.url === '/styles.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homestyle);
        res.end()
    }
    //logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'})
        res.write(homeimg);
        res.end()
    }
    else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homelogic);
        res.end()
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h1>Not Found</h1>');
        res.end()     
    }  
})
server.listen(5000);