var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static(__dirname+"/../PredefinedServices"));
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
});
connection.connect();
app.get("/",function (req,res) {
   res.redirect("/example.html");
});

app.get("/mysql",function (req,res) {
   connection.query("select * from emp",function (err,records,fields) {
      res.send(records);
   });
});

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/demo",function (err,db) {
        db.collection("emp").find().toArray(function (err, array) {
           res.send(array);
        });
    });
});




app.listen(8080);
console.log("Server Listening the Port No.8080");

