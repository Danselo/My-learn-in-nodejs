//principal file
// //extract value from exports
// const { myArray, myNumber, myWebAddress, user } = require("./module/mymodule"); //import module;
// console.log(myArray);
// console.log(myNumber);
// console.log(myWebAddress);
// console.log(user);
const math = require('./math/index')
// console.log(math);
console.log(math.add(10,20));
console.log(math.substract(10,20));
console.log(math.multiply(10,20));
console.log(math.divide(10,20));
//node modules (search in google for more information "nodejs modules")
