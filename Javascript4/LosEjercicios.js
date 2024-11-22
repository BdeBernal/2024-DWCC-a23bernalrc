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
function createTree(data) {
    let ul = document.createElement('ul');

    let keys = Object.keys(data).forEach(key => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.append(key);

        if (Object.keys(data[key]).length > 0) {
            li.append(createTree(data[key]));
        }
    });


    return ul;
}

console.log(createTree(arbore));

// Ejercicio 7

function crearCalendario(elemento, ano, mes) {

    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const fecha = new Date(meses[mes - 1] + ' 1, ' + ano);
    const diaSemana = fecha.toString().substring(0, 3); // Obtención día de la semana en el que empieza el mes

    let thead = document.createElement('th');
    elemento.appendChild(thead);

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dias = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    for (let index = 0; index < dias.length; index++) {
        let col = document.createElement('td');
        thead.append(col);
        col.append(dias[index]);
    }

    let tbody = document.createElement('tbody');
    elemento.appendChild(tbody);

    let row = document.createElement('tr');
    tbody.appendChild(row);

    let startDay = dias.indexOf(diaSemana); // Dia de la semana en la que empieza el mes
    for (let i = 0; i < startDay; i++) {
        let col = document.createElement('td');
        row.appendChild(col); // Rellena con columnas vacías hasta que empiece el mes
    }

    for (let i = 1; i <= numeros.length; i++) {
        if (startDay === 7) { // Salto de línea cada vez que se llega al final de la semana
            startDay = 0;
            row = document.createElement('tr');
            tbody.appendChild(row);
        }
        let col = document.createElement('td');
        col.append(i);
        row.appendChild(col);
        startDay++;
    }
    
    return elemento;
}

let calendario = document.createElement('table');

console.log(crearCalendario(calendario, 2022, 11));

// Ejercicio 8

// Ejercicio 9