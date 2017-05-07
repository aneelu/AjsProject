//Import Express Module
var express = require("express");

//Creating the Node Server
var app = express();

//Link the "Client Location" to "Server"
app.use(express.static(__dirname+"/../Node_BasicEx"));


//Default output.
app.get("/" , function (req,res) {
    res.redirect("/index.html");
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");