(() => {
    const boom = new Audio('../sounds/boom.wav');
    const clap = new Audio('../sounds/clap.wav');
    const hihat = new Audio('../sounds/hihat.wav');
    const kick = new Audio('../sounds/kick.wav');
    const openhat = new Audio('../sounds/openhat.wav');
    const ride = new Audio('../sounds/ride.wav');
    const snare = new Audio('../sounds/snare.wav');
    const tink = new Audio('../sounds/tink.wav');
    const tom = new Audio('../sounds/tink.wav');
    const playsound = sound => {
        sound.currentTime = 0;
        sound.play();
    }
    document.addEventListener('keypress', e => {
        switch (e.key) {
            case 'a':
                playsound(boom);
                break;
            case 's':
                playsound(clap);
                break;
            case 'd':
                playsound(hihat);
                break;
            case 'f':
                playsound(kick);
                break;
            case 'g':
                playsound(openhat);
                break;
            case 'h':
                playsound(ride);
                break;
            case 'j':
                playsound(snare);
                break;
            case 'k':
                playsound(tink);
                break;
            case 'l':
                playsound(tom);
                break;
        }
    });
})()