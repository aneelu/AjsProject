//import express
var express = require("express");

//import bodyparser
var bodyparser = require("body-parser");

//import fs module.
var fs = require("fs");

//create the server
var app = express();


//json as the MIME
app.use(bodyparser.json());


//link the accessing folder
app.use(express.static(__dirname+"/../PostRestful"));


//default page.
app.get("/" , function (req,res) {
   res.redirect("/index.html");
});


//post url.
app.post("/add",function (req,res) {
    var eid = req.body.eid;
    var ename = req.body.ename;
    var eage = req.body.eage;
    var empDetails = {
        "emp2":{
           "id":eid,
            "name":ename,
            "age":eage
        }
    }
    fs.readFile(__dirname+"/emp.json",function (err,data) {
           data = JSON.parse(data);
           data["emp2"]=empDetails.emp2;
           var stringRes = JSON.stringify(data);
           res.send(stringRes);
    });
});


app.get("/:id" , function(req,res){
    fs.readFile(__dirname+"/emp.json",function (err,data) {
        var id = req.params.id;
        data=JSON.parse(data);
        var response = data["emp"+id];
        res.send(JSON.stringify(response));
    });
});

app.delete("/deleteObj",function (req,res) {
    fs.readFile(__dirname+"/emp.json",function (err,data) {
        data = JSON.parse(data);
        delete data["emp1"];
        res.send(JSON.stringify(data));
    });
});
//delete (http) request used to delete the Resources Permanently.

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");





