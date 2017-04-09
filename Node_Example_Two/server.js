//import the express module
var express = require("express");

//import the fs module
var fs = require("fs");


//create the server
var app = express();


//Node_Example_Two  to the app
app.use(express.static(__dirname+"/../Node_Example_Two"));


//Default page.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//create the get request.
app.get("/static" , function (req,res) {
    fs.readFile(__dirname+"/emp.json", function (err,data) {
        res.send(data);
    });
});



//import the mysql
var mysql = require("mysql");

//create the connection object.
var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"mini_project"
});


//connect to DataBase.
connection.connect();


//create the get request.
app.get("/mysql",function (req,res) {
   connection.query("select * from user_details" ,
                            function (err,records,fields) {
        res.send(records);
   });
});


//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");