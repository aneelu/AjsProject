var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Node_ReadMongoData"));
app.get("/",function (req,res) {
   res.redirect("/index.html");
});
var client = mongodb.MongoClient;
app.get("/mongodb",function (req,res) {
    client.connect("mongodb://127.0.0.1:27017/demo",function (err,db) {
        db.collection("emp").find().toArray(function (err, array) {
            res.send(array);
        });
    });
});
app.listen(8080);
console.log("Server Listening the Port No.8080");