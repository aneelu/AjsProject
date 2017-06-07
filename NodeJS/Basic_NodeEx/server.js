//import express module.
var express = require("express");

//create server.
var app = express();

//Link the "Client Location" to the "Server".
app.use(express.static(__dirname+"/../Basic_NodeEx"));

//Default Output.
app.get("/",function(req,res){
    res.redirect("/index.html");
});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");