
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	// var filter = con.createBiquadFilter();


	var osc = con.createOscillator();
	osc.frequency.value = 440;

	osc.type = "sawtooth"
	osc.connect(con.destination);
	// osc.start();
	// filter.connect(con.destination);
	
	// $(".background").mousemove(function(event) {
	// 	filter.frequency.value = event.clientX;
	// 	filter.Q.value = event.clientY / 5;
	// });
	// 	$(".background").keydown(function (){

	// osc.frequency.value = osc.frequency.value + 10;

	// });
  
