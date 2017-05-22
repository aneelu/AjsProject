//import express.
var express = require("express");

//import mysql
var mysql = require("mysql");

//create the server.
var app = express();

//Link the "Client Location" to the "Server"
app.use(express.static(__dirname+"/../Read_MySQLData"));


//Create the Connection Object.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
});


//connect to database.
connection.connect();

//default page.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});


//Create the API Call
app.get("/mysql",function (req,res) {
    connection.query("select * from emp",function (err,result,fields) {
        res.send(result);
    });
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");







