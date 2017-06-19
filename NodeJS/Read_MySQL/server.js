//import express
var express = require("express");

//import mysql
var mysql = require("mysql");

//create the server
var app = express();

//deploy the client location
app.use(express.static(__dirname+"/../Read_MySQL"));

//default output.
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

//Create the Rest API.
app.get("/mysql",function (req,res) {
   connection.query("select * from emp",function (err,records,fields) {
       res.send(records);
   });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");