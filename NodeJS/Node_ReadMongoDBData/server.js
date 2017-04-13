//import express
var express = require("express");

//import mongodb.
var mongodb = require("mongodb");

//create server.
var app = express();

//Link the Client to the Server.
app.use(express.static(__dirname+"/../Node_ReadMongoDBData"));

//Default page
app.get("/" , function (req,res) {
    res.redirect("/index.html");
});

//Create the MongoClient
var mongoClient = mongodb.MongoClient;

//Create the GET URL.
app.get("/mongodb" , function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/test" , function (err,db) {
        var collection = db.collection("emp");
        collection.find().toArray(function (err, result) {
           res.send(result);
        });
    });
});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");