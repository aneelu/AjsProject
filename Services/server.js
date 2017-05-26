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


//import mongodb.
var mongodb = require("mongodb");
//Create the MongoClient.
var nareshIT = mongodb.MongoClient;
//Connect to MongoServer.
app.get("/mongodb",function (req,res) {
   nareshIT.connect("mongodb://localhost:27017/demo",function (err,db) {
       db.collection("emp").find().toArray(function (err, array) {
           res.send(array);
       });
   });
});


//import fs module.
var fs = require("fs");
app.get("/static" , function (req,res) {
    fs.readFile(__dirname+"/emp.json",function (err,data) {
        res.send(data.toString());
    });
});



//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");









