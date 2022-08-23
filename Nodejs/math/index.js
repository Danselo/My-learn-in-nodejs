//my first module
//export individual module
export function add (x,y){
    return x +y;
}
export function substract (x,y){
    return x - y;
}
export function multiply (x,y){
    return x * y;
}
export function divide (x,y){
    return x / y;
}
//exports funcitons
// module.exports = {
//     add,
//     substract,
//     multiply,
//     divide
// }
//ecmascript exports and import
// export default  {
//     add,
//     substract,
//     multiply,
//     divide
// }
//OTHER FORM
export default {
    add,
    substract,
    multiply,
    divide
}