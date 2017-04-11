var mongodb = require("mongodb");
var express = require("express");
var mongoClient = mongodb.MongoClient;
var app = express();

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/demo" , function (err,db) {
        var collection = db.collection("subjects");
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});

app.listen(8080);
console.log("Server Started on Port No.8080");
