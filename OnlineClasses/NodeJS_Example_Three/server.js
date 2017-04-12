//import express
var express = require("express");

//import the mysql
var mysql = require("mysql");

//create the server.
var app = express();

//Link the "NodeJS_Example_Three" to "app"
app.use(express.static(__dirname+"/../NodeJS_Example_Three"));


//Default Output.
app.get("/" , function (req,res) {
   res.redirect("/index.html");
});


//create the connection object.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

//connect to DataBase.
connection.connect();

//get the data from database.
app.get("/mysql" , function (req,res) {
    connection.query("select * from emp" , function (err,records,fields) {
        res.send(records);
    });
});


//Assign the port number.
app.listen(8080);
console.log("Server Listening the Port No.8080");