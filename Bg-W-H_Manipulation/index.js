var bg = document.getElementById('background');
var width = document.getElementById('width');
var height = document.getElementById('height');

function modifyBox() {
    var selectedBg = bg.value;
    var selectedWidth = width.value;
    var selectedHeight = height.value;
    var box = document.getElementById('modify');

    box.style.backgroundColor = selectedBg;
    box.style.width = selectedWidth+"px";
    box.style.height = selectedHeight+"px";
    selectOption.style.border = selectedBg;
}

document.getElementById('set').addEventListener('click', modifyBox);