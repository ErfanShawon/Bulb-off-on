//*Bulb on/off

let onbtn = document.querySelector(".OnBulb");
let bulb = document.querySelector('.bulb')

function BulbTurnOn () {
    bulb.src ='./css/img/off png.png';
}

onbtn.addEventListener('click',BulbTurnOn );





let Offbtn = document.querySelector(".OffBulb");

function bulbTurnOff () {
    bulb.src ='./css/img/on png.png';
}

Offbtn.addEventListener('click', bulbTurnOff);