var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mysql = require("mysql");
var jwt = require("jwt-simple");
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../MiniProject"));

app.get("/",function (req,res) {
   res.redirect("/index.html");
});

var connection = mysql.createConnection({
   host:"localhost",
    user:"root",
    password:"root",
    database:"poc"
});

connection.connect();


var tokens=[];

app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    connection.query("select * from login_details where uname='"+uname+"'",
                    function (err,records,fields) {
       if(records.length>0){
           var token = jwt.encode({'uname':uname},'hr@tcs.com');
           tokens.push(token);
           res.send({'login':'success','token':token});
       } else{
           res.send({'login':'failure'});
       }
    });


});

app.listen(8080);
console.log("Server Listening the Port No.8080");