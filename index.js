// app.js
// Digital Jams

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

// Routing
app.get("/", function (req, res){
	res.sendFile(__dirname + "/index.html");
});

// Get all the files
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket){
	socket.on("mousedown", function(note){
		socket.broadcast.emit("mousedown", note);
	});

});

http.listen(3000, function(){
	console.log("Server listening on port 3000");
});

