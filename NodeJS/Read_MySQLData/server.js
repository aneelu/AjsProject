//import the mysql
var mysql = require("mysql");

//import the express
var express = require("express");

//create the server.
var app = express();

//Locate the Client Location
app.use(express.static(__dirname+"/../Read_MySQLData"));

//Launch the Default page.
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

var config = require("./config/config");

var pool = mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database,
    connectionLimit:config.connectionLimit
});

//create the rest url("http://localhost:8080/readMysql)
app.get("/readMysql",function (req,res) {
    pool.getConnection(function (err,connection) {
        connection.query("select * from emp",function (err,records,fields) {
           res.send(records);
        });
    });
});


//assign the port
app.listen(8080);
console.log("Server Listening the Port No.8080");
