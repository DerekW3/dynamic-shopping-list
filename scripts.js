const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function onButtonClick() {
    let item = input.textContent;
    input.textContent = "";

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
}