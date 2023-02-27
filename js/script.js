const cube = document.querySelector('.cube');
const timerSelection = document.querySelector('.timerSelection')
let minutos, segundos, repeater;

let alarm = new Audio('./audio/alarm.mp3');

timerSelection.addEventListener('click', () => {
    
    cube.style.transform = `translateY(400px) rotateX(00deg) rotateY(0deg) rotateZ(0deg)`;
    
    let seleccionado = document.querySelector('input[name=select-time]:checked').value;
    console.log(seleccionado)
    
    switch (seleccionado) {
        case "5":
            cube.style.transform = `translateY(400px) rotateX(00deg) rotateY(00deg) rotateZ(00deg)`;
            clearInterval(repeater);
            break;
        case "10":
            cube.style.transform = `translateY(400px) rotateX(00deg) rotateY(90deg) rotateZ(00deg)`;
            clearInterval(repeater);
            break;
        case "20":
            cube.style.transform = `translateY(400px) rotateX(-90deg) rotateY(00deg) rotateZ(00deg)`;
            clearInterval(repeater);
            break;
        case "25":
            cube.style.transform = `translateY(400px) rotateX(90deg) rotateY(00deg) rotateZ(00deg)`;
            clearInterval(repeater);
            break;
        case "30":
            cube.style.transform = `translateY(400px) rotateX(00deg) rotateY(270deg) rotateZ(00deg)`;
            clearInterval(repeater);
            break;
        case "40":
            cube.style.transform = `translateY(400px) rotateX(180deg) rotateY(00deg) rotateZ(180deg)`;
            clearInterval(repeater);
            break;
    }
});

function startTimer() {
    obtenerMinutos();
    segundos = 0;
    setTimer();
    countdown()
}

function obtenerMinutos() {
    minutos = document.querySelector('input[name=select-time]:checked').value;
}

function setTimer() {
    tiempo.innerHTML = `<p class="number">${minutos > 9 ? minutos : ('0' + minutos)}</p><span>:</span><p class="number">${segundos > 9 ? segundos : ('0' + segundos)}</p>`;
    document.title = `${minutos > 9 ? minutos : ('0' + minutos)}:${segundos > 9 ? segundos : ('0' + segundos)}`;
}

function countdown() {
    repeater = setInterval(runner, 1000);
}

function runner() {
    if (segundos > 0) {
        segundos--;
    } else if (minutos > 0) {
        segundos = 59;
        minutos--;
    } else {
        playAlarm();
        clearInterval(repeater);
    }
setTimer();
}

function stopTimer(){
    clearInterval(repeater);
    location.reload();
}

function playAlarm(){
    player.innerHTML = `<audio autoplay controls loop muted playsinline><source src="./audio/alarm.mp3" type="audio/mpeg"></audio>`;
    document.getElementById("player").muted = false;
    credits.innerHTML = `<a href="https://www.youtube.com/@tonyannmusic/featured" target="_blank">"iPhone alarm as a piano ballad" by Tony Ann<br>subscribe to his channel</a>`;
}


