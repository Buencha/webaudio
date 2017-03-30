
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	var osc = con.createOscillator();
	var lfo = con.createOscillator();
	var lfo_amp = con.createGain();


	lfo_amp.gain.value = 200;

	osc.frequency.value = 10;	

	lfo.frequency.value = 0.5;	


	lfo.connect(lfo_amp); 
	lfo_amp.connect(osc.frequency);	
	osc.connect(con.destination);
	
	lfo.start();

	osc.start();
   
	$(".background").mousemove(function (event){
		osc.frequency.value = event.clientX;	
		lfo.frequency.value = event.clientY * (Math.floor((Math.random() * 12) + 0.5));	

	});
  