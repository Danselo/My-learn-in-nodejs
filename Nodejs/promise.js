const { readFile, } = require("fs/promises");
//i can use  function converted to promise (fs/promise ) is very more easyy (standard form )

// const {promisify} = require("util"); 

// const readFilePromise = promisify(readFile) //with this code is very easy to create promise 



async function read() {
  try {
    // throw new Error('this is a error message'); //this is a error
    const result = await readFile("./data/first.txt",'utf-8');
    const result2 = await readFile("./data/second.txt",'utf-8');
    const result3 = await readFile("./data/third.txt",'utf-8');
    const result4 = await readFile("./data/four.txt",'utf-8');

    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (err) {
    console.log(err);
  }
}
read();
