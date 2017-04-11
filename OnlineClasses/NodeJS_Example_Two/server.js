//import express.
var express = require("express");

//import the fs module.
var fs = require("fs");

//create the server instance.
var app = express();

//NodeJS_Example_Two to the app.
app.use(express.static(__dirname+"/../NodeJS_Example_Two"));


//Default Page.
app.get("/",function (req,res) {
    res.redirect("/index.html");
});

//Fetch the Data From the students.json file.
app.get("/students",function (req,res) {
    fs.readFile(__dirname+"/students.json",function (err,data) {
        res.send(data);
    });
});


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");