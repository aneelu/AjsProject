//import mysql module
var mysql = require("mysql");

//import express
var express = require("express");

//create the server instance
var app = express();

//Deploy the application.
app.use(express.static(__dirname+"/../Read_MySQLData"));


//defualt output.
app.get("/",function (req,res) {
    res.redirect("/index.html");
});


//create the connection object.
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"mini_project"
});


//connect to database.
connection.connect();


//REST API
app.get("/mysql",function (req,res) {
    connection.query("select * from emp",function (err,records,fields) {
        res.send(records);
    });
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");




