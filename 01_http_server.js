//Http Server
//"http" is the predefine module in nodejs, used to create the Http Server
//no need to download the http module
//because http module already exist i  the node software / module


//import module (http module)
//require() function used to import the module
let http = require("http");

//create the server object with the help of createServer() function
//in createServer function we need to supply callBack argument 
//in callBack argument we need to supply 2 object 
//              1. request (recive the data from client operations)   
//              2. response (to reply to the client)

let server = http.createServer((request,response)=>{
    //  response.write is used to write the response/reply to the client
    response.write("<h1>Hi User</h1>")
    // after sending the reponse we need to lock the respomse object
    response.end();
});

// we need to assign port number to the server by server.listen("portNumber")
server.listen(8008);
console.log("Server is running at port no. 8008");