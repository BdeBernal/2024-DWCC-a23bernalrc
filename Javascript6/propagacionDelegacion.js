'use strict';

// Ejercicio 1
const container = document.querySelector('#container');
container.addEventListener('click', event => {
    if (event.target.classList.contains('remove-button')) {
        event.target.closest('div').remove();
    }
});

// Ejercicio 2
const lista = document.querySelector('.tree');
lista.addEventListener('click', event => {
    if (event.target.closest('li').style.opacity == 0) {
        event.target.closest('li').style.opacity = 1;
    } else {
        event.target.closest('li').style.opacity = 0;
    }
});

// Ejercicio 3
