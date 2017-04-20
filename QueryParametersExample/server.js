var express = require("express");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var app =  express();
app.use(bodyparser.json());
var person = mongodb.MongoClient;

app.get("/:id",function (req,res) {
    var searchKey = req.params.id;
    person.connect("mongodb://localhost:27017/api_project",function(err,db){
        var collection = db.collection("emp");

        collection.find().toArray(function (err, array) {
            for(var i=0;i<array.length;i++){
                if(array[i].id == searchKey){
                    res.send(array[i]);
                }
            }
        });

     });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");