 
function playSong(){   
    let i = 0;
    let display = document.getElementById('display'); 
    const loop = new Tone.Loop((time)=>{
        let cycle1 = i % 16;
        bassLineOne(cycle1);
        i++;
    },'8n').start(0);
    Tone.Transport.start();
}

playSong();

function bassLineOne(cycle){
    const fmSynth = new Tone.FMSynth({
        modulationIndex: 12.22,
        envelope: {
            attack: 0.01,
            decay: 0.2
        },
        modulation: {
            type: "square"
        },
        modulationEnvelope: {
            attack: 0.2,
            decay: 0.01
        }
    }).toDestination();
    
    fmSynth.modulationIndex  = 10;
    let triggers = [1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1];
    let notes = [555,60,444,30,540,55,450,55,200,55,100,55,340,55,450,460,55];
    if(triggers[cycle]){
        fmSynth.triggerAttackRelease(notes[cycle],"0.2");
    }
}

