//reuse code 
console.log(module);
const myNumber = 30;
const myWebAddress = 'faztweb.com';
const user  = {
    name : 'Josua',
    lastname: 'Perez'
}
myArray = [10 ,20,30,40]

//export my const to module.exports 
const group = {
    myWebAddress,
    myNumber,
    myArray,
    user
}
// module.exports = group
//other form export
module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.myWebAddress =myWebAddress;
console.log(module);
