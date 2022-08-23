//stream is used to separate a large text into parts to read it faster


//CREATE FILE
const {writeFile } = require ('fs/promises');

const createBigFile = async()=>{
    await writeFile('./data/bigFile.txt',' Hello world!'.repeat(100000));

}

createBigFile();
//READ FILE 
// const  {createReadStream}= require ('fs')
// const stream = createReadStream('./data/bigFile.txt','utf-8');

// stream.on('data',(chunk)=>{
//     console.log(chunk);
// })  
// stream.on('end',()=>{
//     console.log('End read stream');
// })
// stream.on('error',()=>{
//     console.log(error);
// })