'use strict';

// O número de ligazóns da páxina.

console.log(document.querySelector('body').querySelectorAll('p > a').length);

// A dirección da penúltima ligazón

const links = document.querySelector('body').querySelector('p:nth-child(3)');

console.log(links.lastElementChild.previousElementSibling.href);

// O número de ligazóns que apuntan a http://proba



// O número de ligazóns do terceiro parágrafo.

console.log(document.querySelector('body').querySelector('p:nth-child(3)').querySelectorAll('a'))

// Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.

