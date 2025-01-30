'use strict';

// Exercise 1
const cubo = x => x ** 3;

console.log(cubo(3));

// Exercise 2
const impares = array => {
    let numeros = [];
    for (const element of array) {
        if (element % 2 != 0) {
            numeros.push(element);
        }
    }
    return numeros;
}

console.log(impares([2, 4, 6, 5, 1, 9, 5]))

// Exercise 3
const sumar = (...args) => {
    let total = 0;
    for (const element of args) {
        total += element;
    }
    return total;
}

console.log(sumar(2, 5, 7, 2))

// Exercise 4
const media = (...args) => {
    let total = 0;
    let cantidad = 0;
    for (const element of args) {
        total += element;
        cantidad++
    }
    return total / cantidad;
}

console.log(media(2, 5, 7, 2))

// Exercise 5
const minMax = array => {
    const objeto = {
        min: Math.max(...array),
        max: Math.min(...array)
    };
    return objeto
}

console.log(minMax([2, 5, 7, 8]));
    
// Exercise 6
(function () {
    let ladoMayor = 12;
    let ladoMenor = 4;
    let area = ladoMenor * ladoMayor;
    console.log("El área es de " + area);
})();

// Exercise 7
function verificarDni(string) {
    let letra = string.charAt(string.length - 1).toLowerCase();
    let numeros = string.substring(0, 8);

    const orden = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"];
    let total = 0;

    for (const element of numeros) {
        total += element;
    }

    let resto = total % 23;

    if (orden[resto] == letra) {
        console.log("Es correcto")
        return true;
    } else {
        console.log("Es incorrecto")
        return false;
    }
}

verificarDni("46091521G");

// Exercise 8
function cambio(numero) {
    const cash = [500, 200, 100, 50, 20, 10, 5, 2, 1];

    for (const element of cash) {
        while (numero >= element){
            numero -= element;
            console.log("Billete de: " + element);
        }
    }
}

cambio(431);

// Exercise 9
function buscarPatron(texto, patron) {
    let count = 0;
    for (let i = 0; i <= texto.length - patron.length; i++) {
        if (texto.substring(i, i + patron.length) === patron) {
            count++;
        }
    }
    return count;
}

console.log(buscarPatron("Hola, me llamo Hola y soy de Madrid", "Hola"));

// Exercise 10
const inicioXornada = "7:30";
const finalXornada = "17:45";

function axendarReunion(horaInicio, duracionMinutos) {
    let entrada = inicioXornada.split(":");
    let inicioXornadaSegundos = parseInt(entrada[0]) * 3600 + parseInt(entrada[1]) * 60;

    let salida = finalXornada.split(":");
    let finalXornadaSegundos = parseInt(salida[0]) * 3600 + parseInt(salida[1]) * 60;

    let reunion = horaInicio.split(":");
    let reunionInicioSegundos = parseInt(reunion[0]) * 3600 + parseInt(reunion[1]) * 60;
    let reunionFinalSegundos = reunionInicioSegundos + duracionMinutos * 60;

    if (inicioXornadaSegundos <= reunionInicioSegundos && finalXornadaSegundos >= reunionFinalSegundos) {
        return true;
    } else {
        return false;
    }
}

console.log(axendarReunion("7:00", 15));
console.log(axendarReunion("7:15", 30));
console.log(axendarReunion("7:30", 30));
console.log(axendarReunion("11:30", 60));
console.log(axendarReunion("17:00", 45));
console.log(axendarReunion("17:30", 30));

// Exercise 11
function buscaMinas(array) {
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
        if (array[y][x] == -1) {
            
        }
    }
  }
    return array;
}

console.log(buscaMinas([[0, 0, -1, 0],
                        [0, -1, -1, 0]]));

// Exercise 1
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const price = objects.reduce((accumulator, currentValue, index) => accumulator + currentValue.price, 0);

console.log(price);

// Exercise 2
const array = [6, 2, 3, 4, 5, -2];

const menor = array.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));

console.log(menor);

// Exercise 1
const persoas = [
    { nome: 'aaron', idade: 65, id: 1 },
    { nome: 'beth', idade: 2, id: 2 },
    { nome: 'ánxeles', idade: 13, id: 3 },
    { nome: 'daniel', idade: 3, id: 4 },
    { nome: 'ada', idade: 25, id: 5 },
    { nome: 'erea', idade: 1, id: 6 },
    { nome: 'navia', idade: 43, id: 7 },
];

const mayores = persoas.filter(persoa => persoa.idade >= 18);
console.log(mayores);

const nombres = persoas.map(persoa => persoa.nome);
console.log(nombres);

const nombresMayores = persoas.filter(persoa => persoa.idade >= 18).map(persoa => persoa.nome.toUpperCase());
console.log(nombresMayores);

const idNombres = persoas.map(persoa => [persoa.id, persoa.nome]);
console.log(idNombres)

// Exercise 2
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const diasM = dias.filter(dia => dia.charAt(0) == "m");
console.log(diasM);

const diaS = dias.some(dia => dia.charAt(0) == "s");
console.log(diaS)

const todoS = dias.every(dia => dia.charAt(dia.length - 1) == "s");
console.log(todoS)

const primerM = dias.find(dia => dia.charAt(0) == "m");
console.log(primerM);

const primerIndiceM = dias.findIndex(dia => dia.charAt(0) == "m");
console.log(primerIndiceM);

const diasMayus = dias.map(dia => dia.toUpperCase());
console.log(diasMayus)

// Exercise 3
const desordenado = [4, 8, 3, 10, 5];

function compareNumbers(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

const ordenado = desordenado.sort(compareNumbers);
console.log(ordenado);

// Exercise 4
const numerines = [1, 5, 4, 2, 6, 3];

const mayor = numerines.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(mayor);

// Exercise 5
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const sigloXVI = inventors.filter(inventor => (inventor.year >= 1501 && inventor.year <= 1600));
console.log(sigloXVI);

const nomeCompleto = inventors.map(inventor => [inventor.first + " " + inventor.last]);
console.log(nomeCompleto);

const nomeCompletoOrdenado = nomeCompleto.sort((a, b) => a[0].split(" ")[1].localeCompare(b[0].split(" ")[1]));
console.log(nomeCompletoOrdenado);

const ordenApelido = inventors.sort((a, b) => a.last.localeCompare(b.last));
console.log(ordenApelido);

const ordenNacimiento = inventors.sort((a, b) => a.year - b.year);
console.log(ordenNacimiento);

const sumaAnos = inventors.map(inventor => inventor.passed - inventor.year).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumaAnos + " años entre todos los inventores");

const ordenLongevo = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.log(ordenLongevo);

// Exercise 6
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick",
];

const transport = data.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
} else {
    accumulator[currentValue]++;
}
    return accumulator;
}, {});
console.log(transport);

// Exercise 2
function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
    }
}

verify(/ca(r|t)/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(/ferr(?:et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(/\b\w*ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
verify(/\b\w{7,}\b/,["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]);

// Exercise 2
verify(/^([0-9A-Fa-f]{2}([-:])){5}([0-9A-Fa-f]{2})$/, ["00:1A:2B:3C:4D:5E", "01-23-45-67-89-AB"], ["00:1A:2B:3C:4D:5E:6F", "01-23-45-67-89-GH"]);