var express = require("express");
var bodyparser = require("body-parser");
var mysql=require("mysql");
var mongodb = require("mongodb");
var jwt=require("jwt-simple");
var app = express();

app.use(express.static(__dirname+"/../Mini_Project"));
app.use(bodyparser.json());

app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//create the mongoclient
var mongoClient = mongodb.MongoClient;

app.post("/login",function (req,res) {
    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;

    mongoClient.connect("mongodb://localhost:27017/mini_project",function (err,db) {
        var collection = db.collection("login_details");
        collection.find().toArray(function (err, array) {
            if(array[0].uname==uname && array[0].upwd==upwd){
                res.send({'login':'success'});
            }else{
                res.send({'login':'failure'});
            }
        });
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");