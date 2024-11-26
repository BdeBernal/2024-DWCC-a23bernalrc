'use strict';

// Ejercicio 1
const input = document.getElementById('text');
input.addEventListener("focus", event => {
    event.target.style.backgroundColor = 'green';
});

input.addEventListener("blur", event => {
    event.target.style.backgroundColor = '';
});

// Ejercicio 2
const form = document.getElementById('form');
form.addEventListener("submit", event => {
    
});