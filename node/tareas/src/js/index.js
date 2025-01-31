'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, Toast } from 'bootstrap';

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
    if (text.value.trim() === ' ') {
        let div = document.createElement('div');
        let a = document.createElement('a');
        let p = document.createElement('p'); // Delete

        contenido.append(div);
        div.append(p);
        p.append(text.value);

        div.append(a);
        a.append(' X');
    }
});

text.addEventListener('input', event => {
    let filtro = event.target.value.toLowerCase();
    let tareas = contenido.getElementsByTagName('div');

    for (let tarea of tareas) {
        let texto = tarea.getElementsByTagName('p')[0].textContent.toLowerCase();
        if (texto.includes(filtro)) {
            tarea.style.display = 'inline-block';
        } else {
            tarea.style.display = 'none';
        }
    }
});