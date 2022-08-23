const http = require("http");
//this module it allows creating a server and receiving peticions
const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.write("Welcome to de server");
    return response.end();
  }

  if (request.url == "/about") {
    response.write("acerca de");
    return response.end();
  }
  response.write(`
         <h1>Not found</h1>
         <p> THis page is invalid</p>
         <a href="/"> Volver a la pagina principal
         </a>
        
        `); //message sent to server
  response.end();
});
server.listen(3000);
console.log("Server listening on port 3000");
 //the module for automatic restarting is nodemon, (npm i nodemon)