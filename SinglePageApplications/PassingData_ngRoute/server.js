var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../PassingData_ngRoute"));
app.listen(3000);
console.log("Server Listening the Port No.3000");