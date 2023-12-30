const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    let item = input.value;
    input.value = "";

    let listItem = document.createElement('li');
    let itemText = document.createElement('span');
    let itemDelete = document.createElement('button');

    listItem.appendChild(itemText);
    listItem.appendChild(itemDelete);

    itemText.textContent = item;
    itemDelete.textContent = "Delete";

    list.appendChild(listItem);

    itemDelete.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
}