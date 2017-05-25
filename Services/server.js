//import express module.
var express = require("express");

//import mysql
var mysql = require("mysql");

//create the node server instance.
var app = express();

//Link the Client Location to the Server.
app.use(express.static(__dirname+"/../Services"));

//Default Output.
app.get("/" , function (req,res) {
    res.redirect("/predefinedServices.html");
});

//create the connection object.
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});


//connect to database.
connection.connect();

//Rest API.
app.get("/mysql",function (req,res) {
    connection.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");









