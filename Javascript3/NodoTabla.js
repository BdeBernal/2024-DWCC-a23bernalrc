'use strict';

// Acceder ao nodo div
console.log(document.querySelector('body').firstElementChild);

// Acceder ao nodo ul
console.log(document.querySelector('ul'));

// Acceder ao segundo nodo li
console.log(document.querySelector('ul li:nth-child(2)'));

// ¿É certo que elemento.lastChild.nextSibling é sempre null? -> No
// ¿É certo que elemento.children[0].previousSibling é sempre null? -> Si

// Pintar as celas diagonais dunha táboa de vermello
const table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}