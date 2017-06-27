var express = require("express");
var mongodb = require("mongodb");
var app = express();

app.use(express.static(__dirname+"/../ReadMongoDB"));

//defualt output.
app.get("/",function (req,res) {
    res.redirect("/index.html");
});

var durgasoft = mongodb.MongoClient;

app.get("/mongo",function (req,res) {
    durgasoft.connect("mongodb://localhost:27017/mydb",function (err,db) {
        db.collection("emp").find().toArray(function (err, array) {
            res.send(array);
        });
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");