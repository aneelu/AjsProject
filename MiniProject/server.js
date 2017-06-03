var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var fs = require("fs");
var bodyparser = require("body-parser");

var app = express();
app.use(express.static(__dirname+"/../MiniProject"));
app.use(bodyparser.json());

app.get("/",function (req,res) {
   res.redirect("/index.html");
});


app.post("/login",function (req,res) {

    var uname = req.body.uname;
    var upwd = req.body.upwd;

    if(uname=='admin' && upwd=='admin'){
        res.send({'login':'success'});
    }else{
        res.send({'login':'failure'});
    }

});


app.listen(8080);
console.log("Server Listening the Port No.8080");
