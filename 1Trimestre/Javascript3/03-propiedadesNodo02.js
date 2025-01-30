'use strict';

// O número de ligazóns da páxina.

console.log(document.querySelectorAll('a').length);

// A dirección da penúltima ligazón

const links = document.querySelector('p:nth-child(3)');

console.log(links.lastElementChild.previousElementSibling.href);

// O número de ligazóns que apuntan a http://proba

const probaLinks = document.querySelectorAll('a[href="http://proba"]');
console.log(probaLinks.length);

// O número de ligazóns do terceiro parágrafo.

console.log(document.querySelector('p:nth-child(3)').querySelectorAll('a').length)

// Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.

