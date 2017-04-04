
	var audio_context = window.AudioContext || window.webKitAudioContext ;

	var con = new audio_context();
	

	$(".background").keydown(function (){
	var osc = con.createOscillator();

	var amp = con.createGain();

	amp.gain.value = 0;

	osc.frequency.value = Math.random() * 225;
	osc.type = "sine";
	now = con.currentTime;	

	osc.connect(amp);
	amp.connect(con.destination);
	amp.gain.linearRampToValueAtTime(0.1, now + 2);
	amp.gain.linearRampToValueAtTime(0 , now + 4);
	osc.start();

	});
  