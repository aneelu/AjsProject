var express = require("express");
var bodyparser = require("body-parser");
var mongodb = require("mongodb");
var jwt = require("jwt-simple");
var mysql = require("mysql");
var config = require(__dirname+"/config/config");
var fs= require("fs");

var app = express();
app.use(express.static(__dirname+"/../MiniProject"));
app.use(bodyparser.json());

app.get("/",function (req,res) {
   res.redirect("/index.html");
});


var pool = mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database,
    connectionLimit:config.connectionLimit
});

var tokens=[];
var my_connection;

app.post("/login",function (req,res) {
    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;
    pool.getConnection(function (err,connection) {
        my_connection=connection;
        my_connection.query("select * from login_details where uname='"+uname+"'",function (err,records,fields) {
            if(records.length>0){
                var token = jwt.encode({'uname':uname},'hr@nareshit.com');
                tokens.push(token);
                res.send({login:'Success',token:token});
            }else{
                res.send({login:'failure'});
            }
        });
    });
});


app.post("/static",function (req,res) {

    if( (req.body.token)== tokens[0]){

        fs.readFile(__dirname+"/emp.json",function (err,data) {
            res.send(data);
        });


    }else{
        res.send({"404":"Authentication Failed"});
    }
});



app.post("/mysql",function (req,res) {

    if( (req.body.token)== tokens[0]){

        my_connection.query("select * from emp",function (err,records,fields) {
           res.send(records);
        });

    }else{
        res.send({"404":"Authentication Failed"});
    }
});


var mongoClient = mongodb.MongoClient;
app.post("/mongodb",function (req,res) {

    if( (req.body.token)== tokens[0]){

        mongoClient.connect("mongodb://localhost:27017/demo",function (err,db) {
            var collection = db.collection("emp");

            collection.find().toArray(function (err, array) {
               res.send(array);
            });
        });

    }else{
        res.send({"404":"Authentication Failed"});
    }
});




app.listen(8080);
console.log("Server Listening the Port No.8080");