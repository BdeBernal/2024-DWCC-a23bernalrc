'use strict';

let contenido = document.getElementById('tareas');
let button = document.getElementById('button');
let text = document.getElementById('text');
let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

fetch(url)
    .then((response) => response.json())
    .then((data) => mostrarInicial(data));

function mostrarInicial(info) {
    for (const tarea of info) {
        let div = document.createElement('div');
        let a = document.createElement('a');
        let p = document.createElement('p');

        contenido.append(div);

        div.append(p);
        div.append(a);
        div.setAttribute('idTarea', tarea.id);
        p.append(tarea.title);
        a.append(' X');

        if (tarea.completed === true) {
            div.style.backgroundColor = '#97c370';
        }
    }
}

contenido.addEventListener('click', event => {
    let focus = event.target.closest('a');

    if (focus) {

        let id = focus.parentElement.getAttribute('idTarea');
        fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'DELETE'
        }).then(response => {
            focus.parentElement.remove();
        });
    }
});

contenido.addEventListener('click', event => {
    let focus = event.target.closest('div'); // Modificar
    if (focus && focus.id !== 'tareas') {
        focus.style.backgroundColor = '#97c370';
    }
});

button.addEventListener('click', () => {
    let div = document.createElement('div');
    let a = document.createElement('a');
    let p = document.createElement('p'); // Delete

    contenido.append(div);
    div.append(p);
    p.append(text.value);

    div.append(a);
    a.append(' X');

    text.value = '';
});