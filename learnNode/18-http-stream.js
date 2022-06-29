// send and read big file on sserver
const http= require('http');
//const {readFileSync}= require('fs');
const {createReadStream}= require('fs');
const server= http.createServer();
server.on('request',(req,res)=>{
    // const text = readFileSync('./content/big.txt','utf-8')
    // res.end(text)
    const filetext = createReadStream('./content/big.txt','utf-8');
    filetext.on('open',()=>{
        filetext.pipe(res) // Instead of res.end using pipe as it push data from read to write in chunks
    })
    filetext.on('error',(err)=>{
        res.end(err)
    })
});
server.listen(5000);
