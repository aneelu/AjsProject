//import express
var express = require("express");

//import mongodb
var mongodb=require("mongodb");

//create server
var app = express();

//deploy
app.use(express.static(__dirname+"/../Read_MongoDBData"));

//default output.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//create the mongo client.
var nareshIT = mongodb.MongoClient;


//create the REST API.
app.get("/mongo",function (req,res) {
    nareshIT.connect("mongodb://127.0.0.1:27017/workshop",function (err,db) {
        db.collection("emp").find().toArray(function (err, array) {
            res.send(array);
        });
    });
});

//assign the port
app.listen(8080);
console.log("Server Listening the Port No.8080");