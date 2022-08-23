//file system
const fs = require('fs');
//read files 
// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')
// console.log(first);
// //other form 
// console.log(second.toString());
// const title = 'this is a content is add';
// // fs.writeFileSync('./data/third.txt','this is a third file'); 
// fs.writeFileSync('./data/four.txt',title); //if it exists it will be overwritten
// fs.writeFileSync('./data/four.txt',title,{
//     flag: 'a'
// }); // write without overwriting
//overwrite for async
fs.readFile('./data/first.txt','utf-8',(error,data)=>{
    if(error){
    console.log(error);
        
    }
        // console.log(data.toString());
        console.log(data);

        fs.readFile('./data/second.txt','utf-8',(error,data)=>{
            if(error){
            console.log(error);
                
            }
                // console.log(data.toString());
                console.log(data);
                fs.writeFile('./data/newFile.txt','Archivo creado desfde fs', (err,data)=>{
                    console.log(err);
                    console.log(data);

                    fs.writeFile('./data/newFile2.txt','Archivo creado desfde fs', (err,data)=>{
                        console.log(err);
                        console.log(data);
                        fs.writeFile('./data/newFile3.txt','Archivo creado desfde fs', (err,data)=>{
                            console.log(err);
                            console.log(data);
                        })
                    })
                })
        })
})
