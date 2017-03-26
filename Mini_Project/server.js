var express = require("express");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");
var app = express();

//connection object.
var mysql=require("mysql");
var connection = mysql.createConnection({
   host:'localhost',
    user:'root',
    password:'root',
    database:'workshop'
});
connection.connect();


app.use(bodyparser.json());
app.use(express.static(__dirname+"/../Mini_Project"));

app.get("/",function (req,res) {
    res.redirect("/index.html");
});

var tokens=[];

app.post("/api/login",function (req,res) {
    var uname=req.body.u_name;
    var upwd=req.body.u_pwd;
    var sql = "select uname from login_details where uname='"+uname+"'";
    connection.query(sql,function (err,records,fields) {
           if(records.length>0){
               var token = jwt.encode({uname:uname},'hr@nareshit.in');
               tokens.push(token);
               res.send({login:'success',token:token});
           }else{
               res.send({login:'failure'})
           }
    });
});

    app.post("/api/about",function(req,res){
       var c_token = req.body.token;

       if(tokens[0] == c_token){
           res.send({about:"Data From MongoDB...."});
       }else{
           res.send({about:'404'});
       }


    });
app.listen(8080);
console.log("server listening the port no.8080");