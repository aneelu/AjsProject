var express = require("express");
var fs=require("fs");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../RestfulServices"));

app.get("/" , function(req,res){
   res.redirect("/post_example_one.html");
});

app.post("/authenticate",function (req,res) {
   var uname = req.body.username;
   var upwd = req.body.password;
   if(uname == 'admin' && upwd == 'admin'){
        fs.readFile(__dirname+"/emp.json",function (err,data) {
            res.send(data);
        });
   }else{
       res.send({"statusCode":404});
   }
});

app.listen(8080);
console.log("Server Listening the Port No.8080");