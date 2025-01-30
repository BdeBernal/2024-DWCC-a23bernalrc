'use strict';

// Acceder ao nodo div
console.log(document.querySelector('body').firstElementChild);

// Acceder ao nodo ul
console.log(document.querySelector('body').children[1]);

// Acceder ao segundo nodo li
console.log(document.querySelector('body').children[1].lastElementChild);

// ¿É certo que elemento.lastChild.nextSibling é sempre null? -> Si
// ¿É certo que elemento.children[0].previousSibling é sempre null? -> No

// Pintar as celas diagonais dunha táboa de vermello
const table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}