
const sounds = {
    C: new Audio('sounds/C.wav'), 
    D: new Audio('sounds/D.wav'), 
    E: new Audio('sounds/E.wav'), 
    F: new Audio('sounds/F.wav'), 
    G: new Audio('sounds/G.wav'), 
    A: new Audio('sounds/A.wav'), 
    B: new Audio('sounds/B.wav')  
};


let userInteracted = false;


function playSound(note) {
    if (userInteracted) {
        sounds[note].currentTime = 0; 
        sounds[note].play(); 
    }
}


document.addEventListener('click', () => {
    userInteracted = true; 
});


document.querySelectorAll('.key').forEach(key => {
    
    key.addEventListener('click', () => {
        playSound(key.id);
        key.classList.add('active');
        setTimeout(() => {
            key.classList.remove('active');
        }, 100);
    });

    
    key.addEventListener('mouseenter', () => {
        playSound(key.id);
        key.classList.add('hover'); 
    });

    
    key.addEventListener('mouseleave', () => {
        key.classList.remove('hover'); 
    });
});


document.addEventListener('keydown', (event) => {
    const note = event.key.toUpperCase();
    if (sounds[note]) {
        playSound(note);
    }
});
