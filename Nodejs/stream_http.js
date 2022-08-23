const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req,res)=>{
   const fileStream = createReadStream('./data/bigFile.txt','utf-8')

    fileStream.on('data',(chunk)=>{
        fileStream.pipe(res) //pasar porcion de dato
    })
    fileStream.on('error',(err)=>{
        console.log(err);
    })
})
server.listen(3000);
console.log("server listening on port 3000");