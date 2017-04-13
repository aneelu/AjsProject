//import the express
var express = require("express");

//import the mongodb.
var mongodb = require("mongodb");

//create the server.
var app = express();

//Link the "NodeJS_Example_Four" to the "app".
app.use(express.static(__dirname+"/../NodeJS_Example_Four"));

//Default page.
app.get("/" , function (req,res) {
    res.redirect("/index.html");
});

//Create the MongoClient.
var mongoClient = mongodb.MongoClient;


//Create the Get URL.
app.get("/mongodb" , function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/online",function (err,db) {
        var collection = db.collection("emp");
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});


//Assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");