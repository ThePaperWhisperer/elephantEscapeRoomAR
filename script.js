alert("Escape in 5 minutes, or you will meet your doom. Find the 16 digit code, and type it into the box to get out. Tap to allow VR. Good luck!")
var code = "";
for(let i = 0; i < 16; i++){
	code += (Math.floor(Math.random()*10)).toString();
}
    // feature detect
var eogtoggle = false;
var x, y, z;
document.getElementById("mainDiv").onclick = ()=> {
	
	 if (typeof DeviceOrientationEvent.requestPermission === 'function') {
							DeviceOrientationEvent.requestPermission()
								.then(permissionState => {
									if (permissionState === 'granted') {
											window.addEventListener('deviceorientation', (e) => {
																 x = e.beta;
																 y = e.gamma;
																 z = e.alpha;
												document.getElementById("mainDiv").style.transform = `translateZ(600px) rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
															});
										
									}
								})
								.catch(console.error);
						} 
	window.addEventListener('deviceorientation', (e) => {
																 x = e.beta;
																 y = e.gamma;
																 z = e.alpha;
												document.getElementById("mainDiv").style.transform = `translateZ(600px) rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
															});

}
document.getElementById("retro"). onclick = ()=> {
	speechSynthesis.speak(new SpeechSynthesisUtterance("Part 1 is: " + code.substring(0,4)));
}
document.getElementById("desk").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 2 is: " + code.substring(4,8)));

}
document.getElementById("answer").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 3 is: " + code.substring(8,12)));

}
document.getElementById("note").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 4 is: " + code.substring(12,16)));

}
document.getElementById("escape").onclick = ()=>{
		if(document.querySelector("input").value === code){
			alert("Great Job!");
			eogtoggle = true;
		}
		else{
			alert("Nice try. Better luck next time...");
			location.reload();
		}
}
setTimeout(()=> {
	alert("Time's up! Nice try.");
	location.reload();
}, 300000)
