//import the express
var express = require("express");

//Create the Server Instance
var app = express();


//Establish the Communication Between 'Node_BasicEx' to 'app'
app.use(express.static(__dirname+"/../Node_BasicEx"));



//Default Page
app.get("/" , function(req,res){
    res.redirect("/index.html");
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");


