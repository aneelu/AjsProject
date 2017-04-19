var express = require("express");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());

//Create the MongoClient.
var person_one = mongodb.MongoClient;

app.get("/satya_fetchdata",function (req,res) {

    person_one.connect("mongodb://localhost:27017/api_project",function (err,db) {
        var collection = db.collection("emp");
        collection.find().toArray(function (err, array) {
            res.send(array);
        });

    });

});

app.listen(8080);
console.log("Server Listening the Port No.8080");

