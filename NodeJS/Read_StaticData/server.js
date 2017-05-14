var express = require("express");
var fs = require("fs");
var mysql = require("mysql");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../Read_StaticData"));


var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
});


connection.connect();


var durgasoft = mongodb.MongoClient;


app.get("/",function (req,res) {
   res.redirect("/example_2.html");
});

app.get("/static",function (req,res) {
   fs.readFile(__dirname+"/emp.json",function (err,data) {

       if(err){
           console.log(err);
       }
       res.send(data);
   });
});

app.get("/mysql",function (req,res) {
   connection.query("select * from emp",function (err,records,fields) {
       res.send(records);
   });
});


app.get("/mongodb",function (req,res) {
    durgasoft.connect("mongodb://localhost:27017/test",function (err,db) {
       db.collection("subjects").find().toArray(function (err, array) {
           res.send(array)
       });
    });
});




app.listen(8080);
console.log("Server Listening the Port No.8080");