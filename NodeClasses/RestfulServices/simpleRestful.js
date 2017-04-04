var express = require("express");
var app = express();
app.get("/",function (req,res) {
   res.send("Basic Restful Application !");
});
app.listen(8080);
console.log("Server Listening the Port No.8080");