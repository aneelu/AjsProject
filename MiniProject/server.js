var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var fs = require("fs");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");

var app = express();
app.use(express.static(__dirname+"/../MiniProject"));
app.use(bodyparser.json());

app.get("/",function (req,res) {
   res.redirect("/index.html");
});


var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"mini_project"
});
connection.connect();

var tokens=[];


app.post("/login",function (req,res) {

    var uname = req.body.uname;
    var upwd = req.body.upwd;

    connection.query("select uname from login_details where uname='"+uname+"'",
            function (err,records,fields) {
        if(records.length>0){
            var token = jwt.encode({'uname':uname},'hr@nareshit.in');
            tokens.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'failure'});
        }
    });
});



app.post("/static",function (req,res) {

    if(req.body.token == tokens[0]){
        fs.readFile(__dirname+"/emp.json",function (err,data) {
            res.send(data.toString());
        });
    }else{
        res.send({"login":"Auth Failed !"});
    };
});



app.post("/mysql",function (req,res) {

    if(req.body.token == tokens[0]){
        connection.query("select * from emp",function (err,records,fields) {
            res.send(records);
        });
    }else{
        res.send({"login":"Auth Failed !"});
    };
});


var mongoClient = mongodb.MongoClient;


app.post("/mongodb",function (req,res) {

    if(req.body.token == tokens[0]){
        mongoClient.connect("mongodb://localhost:27017/mini_project",function (err,db) {
            db.collection("emp").find().toArray(function (err, array) {
                res.send(array);
            });
        });
    }else{
        res.send({"login":"Auth Failed !"});
    };
});


app.listen(8080);
console.log("Server Listening the Port No.8080");
