var express = require("express");

var app = express();

app.use(express.static(__dirname+"/../PassingData_uiRouter"));

app.listen(90);

console.log("Server Listening the Port No.90");