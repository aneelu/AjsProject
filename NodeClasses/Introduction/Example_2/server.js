var http = require("http");

var my_server = http.createServer(function (req,res) {

    //res.setHeader(200,{'Content-Type':'text/json'});
    res.end('Welcome to NodeJS');
});

my_server.listen(8080);
console.log("Server Listening the Port No.8080");