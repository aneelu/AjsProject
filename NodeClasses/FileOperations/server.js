//import the express.
var express = require("express");

//import body-parser
var bodyparser = require("body-parser");

//import fs
var fs = require("fs");

//create the server.
var app = express();

//set the MIME Type
app.use(bodyparser.json());

//AngularJS - NodeJS
app.use(express.static(__dirname+"/../FileOperations"));
    //Syntax Varied from IDE to IDE


app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//get request.
app.get("/read",function (req,res) {
   fs.readFile(__dirname+"/sample.json",function(err,data){
      res.send(data.toString());
   });
});

//Assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");