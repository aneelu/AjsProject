var express = require("express");
var mysql = require("mysql");
var bodyparser=require("body-parser");
var app = express();
app.use(express.static(__dirname+"/../Mini_Project_Service"));
app.use(bodyparser.json());
var config = require("./config/config");
var jwt_token = require("./config/jwt_token");

var connection=mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});


connection.connect();

app.get("/login",function (req,res) {

    jwt_token.user="Hello";
    jwt_token.password="Hello";


    connection.query("select * from user_details",function (err,records,fields) {
        res.send({"token":jwt_token.token});
    });
});




var token = require("./routes/token");
app.use("/token",token);



app.listen(8080);
console.log("---Server Listening the Port No.8080---");