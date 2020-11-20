

//attach a click listener to a play button
document.getElementById('prime-audio').addEventListener('click', async (e) => {
	await Tone.start()
    e.target.innerHTML = 'Audio Primed';
    testAudio()
})
//test audio
function testAudio(){
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    synth.triggerAttackRelease("C4", "8n", now)
    synth.triggerAttackRelease("E4", "8n", now + 0.5)
    synth.triggerAttackRelease("G4", "8n", now + 1)
    
}
//play sound from button
document.getElementById('play-sound').addEventListener('click', () => {
    player.start();
})
//start and stop transport
let transportRunning = false; 


function startandStopTransport(){

//start and stop transport with space bar
    
    document.addEventListener('keydown', (e) => {
        let toggled = e.code === "Space"? true : false;
        toggleTransport(toggled);
    })
    
    function toggleTransport(toggled){
        if(!transportRunning){
            Tone.Transport.start();
            transportRunning = true;
        }
        else if(toggled
                && transportRunning){
            Tone.Transport.stop();
            transportRunning = false;
        }
    }
    
}
startandStopTransport();


