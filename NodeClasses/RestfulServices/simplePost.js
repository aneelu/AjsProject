var express = require("express");

var app = express();

app.post("/test",function (req,res) {
   console.log(req.body.uname);
});

app.listen(8080);

console.log("Server Listening the Port no.8080");