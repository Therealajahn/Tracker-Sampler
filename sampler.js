
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

//change the colors of the boxes on every step
function animateTrack(){
    function changeBox(i){
    
        let notes = document.getElementsByClassName('note');
        let lastNote = notes.length - 1; 

        i = i % notes.length;
        
        i === 0? 
        notes[lastNote].style.background = "#D5602A":
        notes[i - 1].style.background = "#D5602A";
        
        notes[i].style.background = "#000";
    }

    let i = 0;
    const loop = new Tone.Loop(() => {
        i += 1;
        changeBox(i);
    }, "8n").start(0);
}

animateTrack();

//create a sequencer to change sampler parameters on every step 