var express = require("express");
var router = express.Router();
router.get("/",function (req,res) {
   res.send("This is Demo Routing in NodeJS");
});
module.exports = router;

/*
var obj = function (module) {

};

router.exports = app;*/
