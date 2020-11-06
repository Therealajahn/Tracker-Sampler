
//create a new sampler
const player = new Tone.Player('https://tonejs.github.io/audio/berklee/gong_1.mp3').toDestination();

//attach a click listener to a play button
document.getElementById('prime-audio').addEventListener('click', async (e) => {
	await Tone.start()
    e.target.innerHTML = 'Audio Primed';
})

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


