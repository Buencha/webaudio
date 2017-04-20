
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	// var filter = con.createBiquadFilter();


	var osc = con.createOscillator();
	osc.frequency.value = 440;

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
var slider1, keyboard;
nx.onload = function () {
	slider1.on("*", slider1Changed);
	keyboard.on("*", keyboard1Changed);
};

function slider1Changed(data){
	osc.frequency.value = data.value;
}

function keyboard1Changed(data){
	osc.frequency.value = midiFreq[data.note]
;}

var midiFreq = {
	60:261.63,
};
