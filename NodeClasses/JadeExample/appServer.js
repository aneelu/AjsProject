var express = require("express");
var bodyParser = require("body-parser");
var app = express();
	
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/userLogin", function(req, res){	
	var userDetails = {
		id: "admin",
		pwd: 1234
	}
	if (req.body.uId == userDetails.id && req.body.uPwd == userDetails.pwd) {
		
		res.redirect("/productDetails");
	} else {
		res.redirect("/errPage");
	}	
});

app.get("/productDetails", function(req, res){	
	var pDetails = {
		data: [
			{
				name: "TV",
				price: "$500"
			},
			{
				name: "Mobile",
				price: "$13500"
			},
			{
				name: "PenDrive",
				price: "$2500"
			},
			{
				name: "Dress",
				price: "$200"
			}
		],
		test: "rasad"
	};
	res.render("productDetails", pDetails);
});

app.get("/errPage", function(req, res){
	res.render("errorPage");
})

app.listen(8080, function(){
	console.log("server is listining at 8080");
});