//import the express
var express = require("express");

//import fs module
var fs = require("fs");

//create the server.
var app = express();

//"app" to "Node_ReadStaticData"
app.use(express.static(__dirname+"/../Node_ReadStaticData"));

//Default Page.
app.get("/" , function (req,res) {
   res.redirect("/index.html");
});

//Create the get request.
app.get("/static" , function (req,res) {
   fs.readFile(__dirname+"/emp.json" , function (err,data) {
      res.send(data);
   });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");