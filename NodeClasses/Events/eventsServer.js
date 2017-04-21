var http = require("http");
var url = require("url");
var events = require("events");

var server = http.createServer(function(req, res){

	var reqObj = url.parse(req.url, true);
	reqObj = reqObj.query;

	res.writeHeader(200, {"content-type": "text/plain"});

	var eventEmitter = new events.EventEmitter();

	var listener1 = function(){
		console.log("Send sms to the mobile tht you have logdin");
	};

	eventEmitter.addListener("loginJob", listener1);

	var listener2 = function(){
		console.log("Check the credentials and make user login");
	};
	eventEmitter.addListener("loginJob", listener2);

	eventEmitter.on("productDetails", function(){
		console.log("performing the job of product detaiils");
	});
	if (reqObj.job == 'login') {
		

		
	}

	if (reqObj.job == 'product') {
		eventEmitter.emit("productDetails");
	}
	res.end("got response");
});

server.listen(8080, function(){
	console.log("server is listening at 8080");
});