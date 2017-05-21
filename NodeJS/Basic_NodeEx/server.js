//import express.
var express = require("express");

//create the server
var app = express();


//Link the Client Location to the Server.
app.use(express.static(__dirname+"/../Basic_NodeEx"));


//Default Output
app.get("/" , function(req,res){
    res.redirect("/index.html");
});

//port no.
app.listen(3000);
console.log("Server Listening the Port No.3000");