'use strict';

let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
let contenido = document.getElementById('tareas');
let button = document.getElementById('button');
let text = document.getElementById('text');
let realizada = document.querySelector('div > div');
let div = document.getElementById('tareas');

fetch(url)
    .then((response) => response.json())
    .then((data) => mostrarData(data));

function mostrarData(info) {
    for (const element of info) {
        let div = document.createElement('div');
        contenido.append(div);
        div.textContent = element.title;

        if (element.completed === true) {
            div.style.backgroundColor = 'green';
        }
    }
}

button.addEventListener('click', () => {
    let div = document.createElement('div');
    contenido.append(div);
    div.textContent = text.value;

    text.value = '';
});

tareas.addEventListener('click', event => {
    if (event.target !== tareas && event.target.closest('div')) {
        if (event.target.style.backgroundColor === 'green') {
            event.target.remove()
        } else {
            event.target.style.backgroundColor = 'green';
        }
    }
})
