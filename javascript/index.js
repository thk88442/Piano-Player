//listening for clicks in music player box
const buttons = document.getElementById('music-choice');

//buttons
const canonButton = document.getElementById('canonButton');
const moonlightButton = document.getElementById('moonlightButton');
const _40thButton = document.getElementById('40thButton');

//audio files
const canonMusic = document.querySelector('audio[id="canon"]')
const moonlightMusic = document.querySelector('audio[id="moonlight"]')
const _40thMusic = document.querySelector('audio[id="40th"]')

//key
const key = document.getElementsByClassName('key');

// buttons.addEventListener('click', function(event) {
//     console.log(event.target);
// })



buttons.addEventListener('click', musicPlayer);

function musicPlayer(event) {
    if (event.target.id === 'moonlightButton') {
        if (moonlightMusic.currentTime > 0) {
            moonlightMusic.pause();
            moonlightMusic.currentTime = 0;
        }
        else if (moonlightMusic.currentTime === 0) {
            moonlightMusic.currentTime = 0;
            moonlightMusic.play();
        }
    }
    else if (event.target.id === 'canonButton') {
        if (canonMusic.currentTime > 0) {
            canonMusic.pause();
        }
        else if (canonMusic.currentTime === 0) {
            canonMusic.currentTime = 0;
            canonMusic.play();
        }
    }
    else if (event.target.id === '40thButton') {
        if (_40thMusic.currentTime > 0) {
            _40thMusic.pause();
        }
        else if (_40thMusic.currentTime === 0) {
            _40thMusic.currentTime = 0;
            _40thMusic.play();
        }
    }
}

window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}) 

function removeTransition(event) {
    if (event.propertyName !== 'box-shadow'){
        return;
    }
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

