'use strict';

// Ejercicio 1
const input = document.getElementById('text');
input.addEventListener("focus", event => {
    event.target.style.outline = 'green 2px solid';
});

input.addEventListener("blur", event => {
    event.target.style.outline = 'none';
});

// Ejercicio 2
const form = document.getElementById('form');
form.addEventListener("submit", event => {
    
});