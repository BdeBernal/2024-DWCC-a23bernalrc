'use strict';

// Ejercicio 1
const container = document.querySelector('#container');
container.addEventListener('click', event => {
    if (event.target.classList.contains('remove-button')) {
        event.target.closest('div').remove();
    }
});

// Ejercicio 2
const lista = document.querySelector('#tree');
lista.addEventListener('click', event => {
    const title = event.target.closest('li');
    const parent = title.querySelector('ul');

    if (parent.style.display == 'none') {
        parent.style.display = 'block';
    } else {
        parent.style.display = 'none';
    }
});

// Ejercicio 3
const table = document.querySelector('table');
table.addEventListener('click', event => {

});

// Ejercicio 4 
const contents = document.querySelector('#contents');
contents.addEventListener('click', event => {
    const link = event.target.closest('a');

    const confirmNavigation = confirm('Are you sure you want to navigate to this link?');
    if (!confirmNavigation) {
        event.preventDefault();
    }
});

// Ejercicio 5
const gallery = document.getElementById('thumbs');
gallery.addEventListener('click', event => {
    
});

// Ejercicio 6
const seleccionar = document.getElementById('ul');
seleccionar.addEventListener('click', event => {

    for (const item of seleccionar.children) {
        item.removeAttribute('class');
    }

    const li = event.target.closest('li');

    li.setAttribute('class', 'selected');


});