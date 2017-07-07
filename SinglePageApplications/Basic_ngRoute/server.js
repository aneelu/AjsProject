var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../Basic_ngRoute"));
app.listen(8080);
console.log("Server Listening the Port No.8080");

