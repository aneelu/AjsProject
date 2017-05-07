//import express
var express = require("express");

//import the fs
var fs=require("fs");

//create server.
var app = express();

//Link the Client Location.
app.use(express.static(__dirname+"/../Node_ReadStaticData"));


//Default page
app.get("/",function (req,res) {
   res.redirect("/index.html");
});


//Create Rest API.
app.get("/static" , function (req,res) {
    fs.readFile(__dirname+"/emp.json" , function (err,data) {
        res.send(data);
    });
 });

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");




