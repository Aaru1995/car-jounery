let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let car = document.querySelector('.car'); 
let cloud = document.querySelector('.cloud'); 
let myaudio = document.getElementById('myaudio');

let seconds = document.getElementById('counter').textContent;
let gamestarter = document.querySelector('.game-starter')

let countdown = setInterval(function () {
    seconds--;
    document.getElementById('counter').textContent = seconds;
    if (seconds <= 0) {
        clearInterval(countdown);
        gamestarter.remove();
        cloud.classList.add('cloudanimation');


    }
}, 1000)

setInterval(function () {
    cityouter.classList.toggle('daytonight');

}, 8000);
document.addEventListener('keypress', keycontrol);
let light = false;
let mycararr = ['image/ar1.png', 'image/ar2.png ']
let music = false
function keycontrol(e) {
    if (e.keyCode == 32) {
        cityinner.classList.toggle('cityanimation')
        car.classList.toggle('caranimation')
    }
    if (e.keyCode == 108) {
        if (ar ) {
            car.setAttribute('src', mycararr[0]);
            ar = true;
        }
        else {
            car.setAttribute('src', mycararr[1]);
            ar = false;
        }
    }
    if (e.keyCode == 109) { 
        pasuemusic();
        music = false;
    }
    else { 
        playmusic();
        music = false;
    }
    console.log(e.keyCode);
}