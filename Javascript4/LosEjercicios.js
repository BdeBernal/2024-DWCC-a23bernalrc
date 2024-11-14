'use strict';

// Ejercicio 1

const variable = document.querySelector('p');
const text = '<p>Prueba</p>'

// Ejercicio 2
const losLis = document.querySelectorAll('ol > li').length;
for (let i = 0; i < losLis; i++) {
    document.querySelector('ol > li').remove();
}

// Ejercicio 3
let taboa = document.getElementById("taboa");
taboa.remove(); // Porque el texto no está dentro de etiquetas de la tabla

// Ejercicio 4
const listaUnordered = document.querySelector('ul');
for (let i = 0; i < 4; i++) {
    let li = document.createElement('li');
    li.append('Elemento ' + i);
    listaUnordered.appendChild(li);
}
console.log(listaUnordered);

// Ejercicio 5
const ejercicio5 = document.getElementById('listaULExercicio5').firstElementChild;
let segundo = document.createElement('li');
segundo.append('2');
let tercero = document.createElement('li');
tercero.append('3');
ejercicio5.append(segundo);
ejercicio5.append(tercero);

// Ejercicio 6
let arbore = { // ul
    "Fish": {   // ul
        "trout": {}, // li
        "salmon": {} // li
    },
    "Tree": {   // ul   
        "Huge": {  // ul
            "sequoia": {}, // li
            "oak": {} // li
        },
        "Flowering": {  // ul
            "apple tree": {}, // li
            "magnolia": {} // li
        }
    }
};
function createTree() {
    
}

console.log(createTree());