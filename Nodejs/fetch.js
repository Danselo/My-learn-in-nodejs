
// async function loadData(){
//     // throw new Error('mi  error');
//     try{
//         const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
//  const data = await res.json()
//  console.log(data);
//     }catch(e){
//         console.log(e);
//     }

// }
// console.log(loadData());

//TOP LEVEL AWAIT 
try{
    const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json()
console.log(data);
}catch(e){
    console.log(e);
}