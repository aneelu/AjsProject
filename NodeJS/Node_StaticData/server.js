var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static("D:/AJS_Classes/NodeJS/Node_StaticData"));
//create the rest API.
app.get("/static",function (req,res) {
    fs.readFile("D:/AJS_Classes/NodeJS/Node_StaticData/emp.json",function (err,data) {
        res.send(data.toString());
    });
});
app.listen(7000);
console.log("Server Listening the Port No.8080");