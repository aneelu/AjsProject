//import the express.
var express = require("express");


//create the server.
var app = express();


//Locate the Client Location
app.use(express.static(__dirname+"/../Basic_NodeEx"));


//Default Output.
app.get("/",function(req,res){
   res.redirect("/index.html");
});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");

