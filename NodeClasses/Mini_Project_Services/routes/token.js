var express = require("express");
var jwt = require("jwt-simple");
var user_details = require('D:/AJS_Classes/NodeClasses/Mini_Project_Services/config/jwt_token');

var router = express.Router();
router.get("/",function (req,res) {

    if(user_details.user=="Hello" && user_details.password=="Hello"){
        var token = jwt.encode({'uname':'admin','upwd':'upwd'},'hr@nareshit.in');
        user_details.token=token;
        res.send(token);
    }


});

module.exports = router;
