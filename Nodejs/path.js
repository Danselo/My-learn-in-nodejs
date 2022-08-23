const path = require('path');
const filePath = path.join('/public','dist','/style','main.css');// join rutes or directories or routes to folders
 
console.log(path.basename(filePath)) //RETURN THE BASE FILE 
console.log(path.dirname(filePath)) // route of file without the file

console.log(path.parse(filePath)) //convert in object format
console.log(path.resolve('dist')) //