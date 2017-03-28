var express = require("express");

var app = express();

app.get("/",function (req,res) {
    res.json({"key1":"Defualt Output !"});
});

app.get("/mongodb",function (req,res) {
    res.json({"key1":"Data From MongoDB Soon !"});
});

app.get("/cassandra",function (req,res) {
    res.json({"key1":"Data From Cassandra Soon !"});
});

app.listen(8080);
console.log("Server Listening the Port No.8080");