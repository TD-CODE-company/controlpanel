let oofsnd = document.getElementById("oofsnd");
let spxfamily = document.getElementById("spyxfamily");
let timeskip = document.getElementById("timeskip");
let explositon = document.getElementById("cracker");
let house = document.getElementById('house');
let firework = document.getElementById('firework');
let soundeffect = document.getElementById('music');
let cough = document.getElementById('cough');
let dance = document.getElementById('dance');
let prayer = document.getElementById('prayer');



oofsnd.addEventListener('click', e => {
    let audio = new Audio('Oof.mp3');
    audio.play();
});

firework.addEventListener('click', e => {
    let firework = new Audio('firework.mp3');
    firework.play();
});
spxfamily.addEventListener('click', e => {
    window.open("spyxfamily.mp4")
});

timeskip.addEventListener('click', e => {
    window.open("timeskip.mp4")
});
explositon.addEventListener('click', e => {
    let house = new Audio("House.mp3")
    house.play()
});


cough.addEventListener('click', e => {
    let house = new Audio("cough.mp3")
    house.play()
});

document.getElementById('doorbell').addEventListener('click', e => {
    let house = new Audio("fbiopenup.mp3")
    house.play()
});

house.addEventListener('click', e => {
    window.open("img.html")
});

soundeffect.addEventListener('click', e => {
    let audio = new Audio('sedlif.mp3');
    audio.play();
});

prayer.addEventListener('click', e => {
    let audio = new Audio('prayer.mp3');
    audio.play();
});

dance.addEventListener('click', e => {
    let audio = new Audio('diwali.mp3');
    audio.play();
});
