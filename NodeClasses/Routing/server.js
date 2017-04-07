var express = require("express");
var app = express();
var test = require("./routes/test");
app.use("/demo",test);  // arg1 - url
                        // arg2 - file object
app.listen(8080);
console.log("Server Listening the Port No.8080");