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


// use bottom event listener to find event properties of elements
// buttons.addEventListener('click', function(event) {
//     console.log(event.target.value);
// })



buttons.addEventListener('click', musicPlayer);

function musicPlayer(event) {
    if (event.target.id === 'moonlightButton') {
        console.log('moonlight');
        debugger;
        if (moonlightMusic.currentTime > 0) {
            moonlightMusic.pause();
            moonlightMusic.currentTime = 0;
            console.log('moonlight is paused')
        }
        else if (moonlightMusic.currentTime === 0) {
            moonlightMusic.currentTime = 0;
            moonlightMusic.play();
            console.log('moonlight is playing')
        }
    }
    else if (event.target.id === 'canonButton') {
        console.log('canon');
        debugger;
        if (canonMusic.currentTime > 0) {
            canonMusic.pause();
            console.log('canon is paused')
        }
        else if (canonMusic.currentTime === 0) {
            canonMusic.currentTime = 0;
            canonMusic.play();
            console.log('canon is playing')
        }
    }
    else if (event.target.id === '40thButton') {
        console.log('40th Symphony');
        debugger;
        if (_40thMusic.currentTime > 0) {
            _40thMusic.pause();
            console.log('40th Symphony is paused')
        }
        else if (_40thMusic.currentTime === 0) {
            _40thMusic.currentTime = 0;
            _40thMusic.play();
            console.log('40th Symphony is playing')
        }
    }
}

// function addTwoNumbers(x, y) {
//     sum = x + y;
//     return sum;
// }


// canonButton.addEventListener('click', function() {
//     console.log(canonMusic);
//     canonMusic.currentTime= 0;
//     canonMusic.play();
// })

// moonlightButton.addEventListener('click', function() {
//     console.log(moonlightMusic);
//     moonlightMusic.currenTime=0;
//     moonlightMusic.play();
// })

// _40thButton.addEventListener('click', function() {
//     console.log(_40thMusic);
//     _40thMusic.currentTime=0;
//     _40thMusic.play();
// })