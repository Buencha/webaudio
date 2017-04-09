
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	



	$(".background").keydown(function (){
	var osc = con.createOscillator();

	var amp = con.createGain();

	osc.frequency.value = Math.random() * 225;
	osc.connect(amp);


	now = con.currentTime;	
	
	amp.gain.value = 0;
	amp.gain.linearRampToValueAtTime(0.1, now + 2);	
	amp.gain.linearRampToValueAtTime(0, now + 4);	

	amp.connect(con.destination);
	osc.start();
	osc.start(now + 4);

	});
  