//import the express
var express = require("express");


//create the server instance
var app = express();


//"NodeJS_Example_One" to the "app".
app.use(express.static(__dirname+"/../NodeJS_Example_One"));


//Default Output (index.html)
app.get("/",function (req,res) {
   res.redirect("/index.html");
});


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");


