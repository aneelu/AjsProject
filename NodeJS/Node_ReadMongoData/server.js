var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Node_ReadMongoData"));
app.get("/",function (req,res) {
   res.redirect("/index.html");
});
var nareshIT = mongodb.MongoClient;
app.get("/mongo",function (req,res) {
    nareshIT.connect("mongodb://localhost:27017/workshop",function (err,db) {
        var collection = db.collection("subjects");
        collection.find().toArray(function (err, array) {
           res.send(array);
        });
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");
