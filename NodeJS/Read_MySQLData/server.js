//import express.
var express = require("express");

//import mysql
var mysql = require("mysql");

//create server
var app = express();

//Link the Client Location to Server.
app.use(express.static(__dirname+"/../Read_MySQLData"));


//Default Output.
app.get("/",function (req,res) {
    res.redirect("/index.html");
});


//create connection object.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

//connect to database.
connection.connect();

//create the RestAPI.
app.get("/mysql",function (req,res) {
   connection.query("select * from emp",function (err,records,fields) {
       res.send(records);
   });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");
