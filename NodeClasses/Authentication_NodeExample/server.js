var express = require("express");
var bodyparser = require("body-parser");

var jwt = require("jwt-simple");

var app = express();

app.use(bodyparser.json());

var mongodb=require("mongodb");
var client = mongodb.MongoClient;
app.use(express.static(__dirname+"/../Authentication_NodeExample"));

app.get("/",function (req,res) {
   res.redirect("/index.html");
});

app.post("/login" , function (req,res) {
    var u_name = req.body.u_name;
    var u_pwd = req.body.u_pwd;


    if(u_name == "admin" && u_pwd=="admin"){
        var token = jwt.encode({"u_name":u_name}, "123456ABCDEF");
        res.send({'login':'success',
            'token':token});
    }
    else{
        res.send({'login':'failure'});
    }
});


app.listen(8080);
console.log("Server Listening the Port No.8080");
