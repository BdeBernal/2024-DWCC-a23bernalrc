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
    const title = event.target.closest('li');
    if (!title) return;

    const childrenContainer = title.parentElement.querySelector('ul');
    if (!childrenContainer) return;

    if (childrenContainer.style.display === 'none') {
        childrenContainer.style.display = 'block';
    } else {
        childrenContainer.style.display = 'none';
    }
});

// Ejercicio 3
const table = document.querySelector('table');
table.addEventListener('click', event => {
    if (event.target.tagName !== 'TH') return;

    const th = event.target;
    const table = th.closest('table');
    const index = Array.from(th.parentNode.children).indexOf(th);
    const type = th.dataset.type;
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);

    rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].innerText;
        const cellB = rowB.children[index].innerText;

        if (type === 'number') {
            return parseFloat(cellA) - parseFloat(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    rows.forEach(row => table.appendChild(row));
});

// Ejercicio 4 
const contents = document.querySelector('#contents');
contents.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;

    const confirmNavigation = confirm('Are you sure you want to navigate to this link?');
    if (!confirmNavigation) {
        event.preventDefault();
    }
});