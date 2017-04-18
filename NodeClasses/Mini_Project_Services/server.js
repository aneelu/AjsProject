var express = require("express");
var mysql = require("mysql");
var bodyparser=require("body-parser");
var app = express();
app.use(express.static(__dirname+"/../Mini_Project_Service"));
app.use(bodyparser.json());
var config = require("./config/config");

var connection=mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});

connection.connect();

app.get("/login",function (req,res) {var host = config.host;
    connection.query("select * from user_details",function (err,records,fields) {
       res.send(records);
    });
});

app.listen(8080);
console.log("---Server Listening the Port No.8080---");