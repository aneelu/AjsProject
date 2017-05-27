var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mysql = require("mysql");
var jwt = require("jwt-simple");
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../MiniProject"));

app.get("/",function (req,res) {
   res.redirect("/index.html");
});

var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"poc"
});

connection.connect();


var tokens=[];

app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    connection.query("select * from login_details where uname='"+uname+"'",
                    function (err,records,fields) {
       if(records.length>0){
           var token = jwt.encode({'uname':uname},'hr@tcs.com');
           tokens.push(token);
           res.send({'login':'success','token':token});
       } else{
           res.send({'login':'failure'});
       }
    });

});

var fs = require("fs");

app.post("/static",function (req,res) {

    if(req.body.token == tokens[0]){
        fs.readFile(__dirname+"/emp.json",function (err,data) {
            res.send(data.toString());
        });
    }else{
        res.send({"404":"Authenticaion Error"});
    }


});


app.post("/mysql",function (req,res) {

    if(req.body.token == tokens[0]){
        connection.query("select * from emp",function (err,records,fields) {
           res.send(records);
        });
    }else{
        res.send({"404":"Authenticaion Error"});
    }


});

var mongodb=require("mongodb");
var nareshIT = mongodb.MongoClient;

app.post("/mongodb",function (req,res) {

    if(req.body.token == tokens[0]){
        nareshIT.connect("mongodb://localhost:27017/mini_project",function (err,db) {
           db.collection("emp").find().toArray(function (err, array) {
               res.send(array);
           }) ;
        });
    }else{
        res.send({"404":"Authenticaion Error"});
    }


});




app.listen(8080);
console.log("Server Listening the Port No.8080");