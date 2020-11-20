

//attach a click listener to a play button
document.getElementById('prime-audio').addEventListener('click', async (e) => {
	await Tone.start()
    e.target.innerHTML = 'Audio Primed';
    testAudio()
})


//start and stop transport
function startandStopTransport(){
    
    let transportRunning = false; 
    
    function toggleTransport(){

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
    toggleTransport();   
}
startandStopTransport();


