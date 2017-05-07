//import express
var express = require("express");

//import mysql
var mysql=require("mysql");

//create the server
var app = express();

//link the client location.
app.use(express.static(__dirname+"/../Node_ReadMySQLData"));

//Default page.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//create the connection object.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"workshop"
});

//connect to database.
connection.connect();


//create the Rest API.
app.get("/mysql",function (req,res) {
    connection.query("select * from subjects",function (err,records,fields) {
        res.send(records);
    });
});

//assign the port.
app.listen(8080);
console.log("server listening the port no.8080");