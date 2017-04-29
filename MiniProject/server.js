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

app.post("/login",function (req,res) {
    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;
    pool.getConnection(function (err,connection) {
        connection.query("select * from login_details where uname='"+uname+"'",function (err,records,fields) {
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


app.listen(8080);
console.log("Server Listening the Port No.8080");