
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	

	$(".background").keydown(function (){
	var osc = con.createOscillator();

	var amp = con.createGain();

	amp.gain.value = 0.05;

	osc.frequency.value = Math.random() * 225;
	osc.type = "triangle";
	

	osc.connect(amp);
	amp.connect(con.destination);
	
	//osc.start();

	});
  