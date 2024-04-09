//import module (http module)
//require() function used to import the module
//if http module import successfully it will return an object http
let http = require("http");

//import url module
//url module used to read the query parameters
//url module is perdefine module
//url module avaliable along with the node module/software
let url = require("url");

//create the httpServer
let server = http.createServer((request,response)=>{
    //MIME TYPE :- The same type of language in wich client side send the data and server side also send the data
    //communication language b/w client and server called MIME
    //(we are setting dummy MIME Type) to set the MIME type we use writeHead function
    //in writeHead fumction we have 2 argument
    //  1. status code (200 is success status code)
    //  2. content type
    response.writeHead(200,{ 'Content-Type': 'text/html'});

    //url.parse method takes a URL string, parses it, and returns a URL object.
    let object = url.parse(request.url,true).query

    if(object.uname === "snehil" && object.pwd === "Snehil@123"){
        response.write("<h1> Login Sucess </h1>");
    }
    else{
        response.write("<h1> Login failed </h1>");
    }

    //end the response
    response.end();
});

server.listen(8008);
console.log("server is running in port no. 8008")

//

