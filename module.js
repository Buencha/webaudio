
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	// var filter = con.createBiquadFilter();


	var osc = con.createOscillator();
	

	osc.type = "sawtooth"

	osc.start();
	// osc.connect(filter);
	osc.connect(con.destination);

	// $(".background").mousemove(function(event) {
	// 	filter.frequency.value = event.clientX;
	// 	filter.Q.value = event.clientY / 5;
	// });
	// 	$(".background").keydown(function (){

	// osc.frequency.value = osc.frequency.value + 10;

	// });

var tilt;
nx.onload = function () {
	tilt.on("*", tiltChanged);
	
};

function tiltChanged(data){
	console.log(data);
	osc.frequency.value = data.x * 500;

}

function keyboard1Changed(data){
	osc.frequency.value = midiFreq[data.note]
;}

var midiFreq = {
	60:261.63,
};
 
