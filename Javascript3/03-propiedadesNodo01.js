'use strict';

// O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:

const etiqueta = document.querySelector('form').lastElementChild.previousElementSibling;

console.log(etiqueta.innerHTML);
console.log(etiqueta.innerText);
console.log(etiqueta.textContent);

// O valor do primeiro input de sexo

console.log(etiqueta.firstElementChild.nextElementSibling.value);

// O valor do sexo que estea seleccionado.

console.log(etiqueta.querySelector('input:checked').value);

// O texto de cada un dos elementos <li>

const ul = document.querySelector('body > ul');

console.log(ul.innerText);

// Indica cantos elementos <li> hai.

console.log(ul.querySelectorAll('li').length);

// Indica o valor do atributo data-widget-name

const div = document.querySelector('body > div[id=lipsum]').lastElementChild;

console.log(div)