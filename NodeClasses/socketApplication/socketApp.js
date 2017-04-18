var express = require("express");
var app = express();

app.use(express.static("public"));

var server = require("http").createServer(app).listen(8080, function(){
	console.log("Socket server listing at 8080");
});

var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket){
	socket.on("sendData", function(data){
		io.sockets.emit("chatreceive", data);
	});
});