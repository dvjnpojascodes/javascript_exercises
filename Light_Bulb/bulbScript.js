var bulb = document.getElementById('glassBulb');
var onBtn = document.getElementById('on');
var offBtn = document.getElementById('off');

function bulbOn() {
    bulb.style.backgroundColor = "#ffe548";
}

function bulbOff(){
    bulb.style.backgroundColor = "#f7f1f0";
}

onBtn.addEventListener('click', bulbOn);
offBtn.addEventListener('click', bulbOff);