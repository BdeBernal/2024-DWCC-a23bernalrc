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
}

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
    
}

console.log(buscaMinas(vietnam));