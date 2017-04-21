// Clustring with native node js
var http = require("http");
var cluster = require("cluster");

if (cluster.isMaster) {
	for(var i = 1; i <=4; i++) {
		cluster.fork();
	}
} else {		
	var server = http.createServer(function(req, res){
		res.end("done"+process.pid);
	});

	server.listen(8080, function(){
		console.log("running-- at Process --"+process.pid);
	});
}
