var list = document.querySelector('ul');
var userInput = document.querySelector('input');
var btn = document.querySelector('button');


function addItem() {
    let item = userInput.value;
    userInput.value = '';

    var listItem = document.createElement('li');
    var text = document.createElement('span');
    var deleteItem = document.createElement('button');

    text.textContent = item;
    deleteItem.textContent = "Delete";

    listItem.append(text, deleteItem);
    list.appendChild(listItem);

    listItem.addEventListener('click', ()=> list.removeChild(listItem));

    userInput.focus();
}


btn.addEventListener('click', addItem);