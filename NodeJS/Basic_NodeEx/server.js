//import the express
var express = require("express");

//Create the Node Server
var app = express();

//Link the Client Location (Basic_NodeEx) to the Server (app)
app.use(express.static(__dirname+"/../Basic_NodeEx"));

//Default Output.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//Port Number.
app.listen(8080);
console.log("Server Listening the Port No.8080");
