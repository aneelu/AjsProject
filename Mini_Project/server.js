//import the express module.
var express = require("express");
//create the server
var app = express();
//Mini_Project to Node Application.
app.use(express.static(__dirname+"/../Mini_Project"));
//Default Page
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//import the body-parser
var bodyparser = require("body-parser");
//Set the JSON as the MIME
app.use(bodyparser.json());


//import the mysql.
var mysql=require("mysql");
//create connection object.
var connection = mysql.createConnection({
   host:'localhost',
    user:'root',
    password:'root',
    database:'mini_project'
});
//connect to database.
connection.connect();


var jwt = require("jwt-simple");


//create the post url.
app.post("/login/authenicate",function(req,res){
    var uname = req.body.u_name;
    connection.query("select uname from user_details where uname='"+uname+"'",function (err,records,fields) {
        if(records.length>0){
            var token = jwt.encode({uname:uname},"123456ABCDEF");
            res.send({login:"success",token:token});
        }else{
            res.send({login:"failure"});
        };
    });
});


app.post("/register" , function (req,res) {
    var uname = req.body.uname;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var upwd  = req.body.upwd;
    var uphone = req.body.uphone;
    var uaddress = req.body.uaddress;
    var my_query="insert into user_details values("+"'"+uname+"'"+","+"'"+fname+"'"+","+"'"+lname+"'"+","+"'"+upwd+"'"+","+"'"+uphone+"'"+","+"'"+"xyx"+"'"+","+"'"+"male"+"'"+","+"'"+uaddress+"'"+")";
    connection.query(my_query,function (err,res) {
       console.log(err);
    });

});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");