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

//Store the Token.
var tokens=[];

app.post("/login",function (req,res) {
    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;

    mongoClient.connect("mongodb://localhost:27017/mini_project",function (err,db) {
        var collection = db.collection("login_details");
        collection.find().toArray(function (err, array) {
            if(array[0].uname==uname && array[0].upwd==upwd){
                var token = jwt.encode({'u_name':uname},'tcs@admin.com');
                tokens.push(token);
                res.send({'login':'success','token':token});
            }else{
                res.send({'login':'failure'});
            }
        });
    });
});


var fs = require("fs");

app.post("/static",function (req,res) {
    var token = req.body.token;
    if(token == tokens[0]){
        fs.readFile(__dirname+"/customers.json",function (err,data) {
            if(err){
                console.log(err);
            }
           res.send(data.toString());
           console.log(data.toString());
        });
    }else{
        res.send({"authentication":"failed"});
    }
});


app.post("/mongo",function (req,res) {
    var token = req.body.token;
    if(token == tokens[0]){
        mongoClient.connect("mongodb://localhost:27017/mini_project",function (err,db) {
           var collection = db.collection("emp");
           collection.find().toArray(function (error, array) {
              res.send(array);
           });
        });
    }else{
        res.send({"authentication":"failed"});
    }
});


app.listen(8080);
console.log("Server Listening the Port No.8080");