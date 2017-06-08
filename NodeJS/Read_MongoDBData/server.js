//import express
var express = require("express");

//import mongodb
var mongodb=require("mongodb");

//create server.
var app = express();

//Client Location.
app.use(express.static(__dirname+"/../Read_MongoDBData"));


//default output.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//Create the Client.
var client = mongodb.MongoClient;

//create the REST API.
app.get("/mongodb",function (req,res) {
    client.connect("mongodb://127.0.0.1:27017/node",function (err,db) {
       db.collection("emp").find().toArray(function (err, array) {
           res.send(array);
       });
    });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");
