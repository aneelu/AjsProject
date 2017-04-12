//import express
var express = require("express");

//import mysql
var mysql = require("mysql");

//create the server.
var app = express();

// 'Node_ReadMySQLData' to 'app'
app.use(express.static(__dirname+"/../Node_ReadMySQLData"));

//Create the Connection Object.
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
});

//connect to DataBase.
connection.connect();


//Default Page
app.get("/",function (req,res) {
   res.redirect("/index.html");
});


//create the get request.
app.get("/mysql" , function (req,res) {
    connection.query("select * from subjects" , function (err,records,fields) {
        res.send(records);
    });
});


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");



