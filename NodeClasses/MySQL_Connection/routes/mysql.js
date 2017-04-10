var mysql=require("mysql");
var express = require("express");
var router = express.Router();

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

connection.connect();


router.get("/",function (req,res) {
    connection.query("select * from emp",my_fun);
    function my_fun(err,records,fields) {
        res.send(records);
    };
});

module.exports = router;

