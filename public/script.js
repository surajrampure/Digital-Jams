// Plays the piano notes when we need it
$(document).ready(function() {

	var socket = io();

	socket.on('mousedown', function(note) {
		// Press down a key
		var audio = document.createElement('audio');
       	audio.setAttribute('src', "audio/"+note+".mp3");
       	console.log("should network play");
       	audio.play();
	});

	var notes = ["C2","D2","E2","F2","G2","A3","B3","C3","D3","E3","F3","G3","A4","B4","C4","D4","E4","F4","G4","A5","B5","C5"];
	var sharps = ["C_2", "D_2", "F_2", "G_2", "A_3", "C_3", "D_3", "F_3", "G_3", "A_4", "C_4", "D_4", "F_4", "G_4", "A_5"];
	var drums = ["BassKick", "Clap", "Crash", "Cymbal", "HiHat", "Kick"]
	var cowbells = ["Cow1", "Cow2"];
	var animals = ["Honk", "Moo", "Crow", "Woof", "Meow"];

	
	for (var i = 0; i < notes.length; i++) {
		$("."+notes[i]).bind("mousedown",{note:notes[i]},function(event) {
			var data = event.data;
			socket.emit("mousedown", data.note);
			var audio = document.createElement('audio');
			console.log("hello!");
        	audio.setAttribute('src', "audio/"+data.note+".mp3");
        	audio.play();
		});
	};
	for (var i = 0; i < sharps.length; i++) {
		$("."+sharps[i]).bind("mousedown",{note:sharps[i]},function(event) {
			var data = event.data;
			socket.emit('mousedown', data.note);
			var audio = document.createElement('audio');
        	audio.setAttribute('src', "audio/"+data.note+".mp3");
        	audio.play();
		});
	};


	for (var i = 0; i < drums.length; i ++) {
		$("."+drums[i]).bind("mousedown", {drum:drums[i]}, function(event){
			var data = event.data;
			socket.emit("mousedown", data.drum);
			var audio = document.createElement("audio");
			audio.setAttribute("src", "audio/"+data.drum+".mp3");
			audio.play();
		});
	};

	for (var i = 0; i < cowbells.length; i ++) {
		$("."+cowbells[i]).bind("mousedown", {cow:cowbells[i]}, function(event){
			var data = event.data;
			socket.emit("mousedown", data.cow);
			var audio = document.createElement("audio");
			audio.setAttribute("src", "audio/"+data.cow+".mp3");
			audio.play();
		});
	};

	for (var i = 0; i < animals.length; i ++) {
		$("."+animals[i]).bind("mousedown", {animal:animals[i]}, function(event){
			var data = event.data;
			socket.emit("mousedown", data.animal);
			var audio = document.createElement("audio");
			audio.setAttribute("src", "audio/"+data.animal+".mp3");
			audio.play();
			console.log(animals[i]);
		});
	};





});
