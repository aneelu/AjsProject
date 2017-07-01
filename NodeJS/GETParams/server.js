var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../GETParams"));
app.get("/login",function (req,res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;

    if(uname=='admin' && upwd=='admim'){
        res.send("Login Success !");
    }else{
        res.send("Login Failed !");
    }
});

app.listen(8080);