//import the modules.
var express = require("express");

//create the server
var app=express();

//deploy the application
app.use(express.static("D:/AJS_Classes/NodeJS/Basic_NodeEx"));


//assign the port no.
app.listen(90);
console.log("Server Listening the Port No.90");