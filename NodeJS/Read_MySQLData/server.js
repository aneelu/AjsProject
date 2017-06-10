//import express
var express = require("express");

//import mysql
var mysql = require("mysql");


//create server.
var app = express();


//Deploy the Client Location.
app.use(express.static(__dirname+"/../Read_MySQLData"));


//Default Output.
app.get("/",function(req,res){
    res.redirect("/index.html");
});


//connection object.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mini_project"
});


//connect to database.
connection.connect();


//Create the Rest API.
app.get("/mysql",function (req,res) {
    connection.query("select * from emp",function (err,records,fields) {
        res.send(records);
    });
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");







