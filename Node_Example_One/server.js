//import the express module.
var express = require("express");

//create the server instance
var app = express();

//link the Node_Example_one to server.
app.use(express.static(__dirname+"/../Node_Example_One"));


//Default Output.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//Port Number.
app.listen(8080);
console.log("Server Listening the Port No.8080");

