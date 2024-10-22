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
    return [Math.max(...array), Math.min(...array)]
}

console.log(minMax([2, 5, 7, 8]));
    
// Exercise 6
(function () {
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
    const cash = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    for (const element of cash) {
        while (numero > element){
            numero -= element;
            ////////
        }
    }
}

cambio(340);

// Exercise 9
function buscarPatron(texto, patron) {
    
}
