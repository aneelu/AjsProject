var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static(__dirname+"/../Read_MySQL"));

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database : "demo"
});

connection.connect();

app.get("/mysql",function (req,res) {
    connection.query("select * from emp",function (err,records,fields) {
        res.send(records);
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");