//import express
var express = require("express");


//create the server
var app = express();


//Deploy the application
app.use(express.static(__dirname+"/../Basic_NodeEx"));


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");