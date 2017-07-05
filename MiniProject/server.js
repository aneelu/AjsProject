var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");
var app = express();
var fs = require("fs");
var mongodb = require("mongodb");


app.use(bodyparser.json());
app.use(express.static(__dirname+"/../MiniProject"));

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mini_project"
});

connection.connect();

var tokens = [];

app.post("/login" , function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    connection.query("select * from login_details where uname='"+uname+"'",function (err,records,fields) {
        if(records.length>0){
            var token = jwt.encode({"uname":uname},"hr@tcs.com");
            tokens.push(token);
            res.send({login:'Success',token:token});
        }else{
            res.send({login:'Fail'});
        }
    });

});


app.post("/static",function (req,res) {
    var token = req.body.token
    if(tokens[0] == token){
        fs.readFile(__dirname+"/emp.json",function (err,data) {
            res.send(data);
        });
    }else{
        res.send({'401':'Authenitication Failed !'});
    }
});


app.post("/mysql",function (req,res) {
    var token = req.body.token
    if(tokens[0] == token){
        connection.query("select * from emp",function (err,records,fields) {
            res.send(records);
        });
    }else{
        res.send({'401':'Authenitication Failed !'});
    }
});

var nareshIT = mongodb.MongoClient;
app.post("/mongodb",function (req,res) {
    var token = req.body.token
    if(tokens[0] == token){
        nareshIT.connect("mongodb://localhost:27017/node_classes",function (err,db) {
            db.collection("product").find().toArray(function (err, array) {
                res.send(array);
            });
        });
    }else{
        res.send({'401':'Authenitication Failed !'});
    }
});


app.listen(8080);
console.log("Server Listening the Port No.8080");