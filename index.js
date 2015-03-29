var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

app.get("/", function (req, res){
	res.sendFile(__dirname + "/index.html");
});

// Get all the file
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket){
	socket.on("mousedown", function(note){
		socket.broadcast.emit("mousedown", note);
	});

});

http.listen(3000, function(){
	console.log("Server on 3000");
});

