var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../MySQL_Connection"));
app.get("/",function (req,res) {
   res.redirect("/index.html");
});
var mysql = require("./routes/mysql");
app.use("/mysql",mysql);
app.listen(8080);
console.log("Server Listening the Port No.8080");