'use strict';

//Exercise 1
function diaLaborable() {
    let dia = "Lunes";

    if (dia == "Domingo" || dia == "Sabado") {
        console.log(dia + " no es laborable");
    } else {
        console.log(dia + " laborable");
    }
}

diaLaborable();

//Exercise 2
function numeroMayor() {
    let numero1 = 4;
    let numero2 = 3;
    let numero3 = 2;

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            console.log(numero1 + " es el mayor de los tres números")
        } else {
            console.log(numero3 + " es el mayor de los tres números")
        }
    } else {
        if (numero2 > numero3) {
            console.log(numero2 + " es el mayor de los tres números")
        } else {
            console.log(numero3 + " es el mayor de los tres números")
        }
    }
}

numeroMayor();

//Exercise 3
function numerosPares() {
    for (let x = 0; x <= 30; x++){
        if (x % 2 == 0) {
            console.log(x + " es par")
        }
    }
}

numerosPares();

//Exercise 4
function potencias() {
    for (let x = 0; x <= 20; x++){
        console.log("2 elevado a " + x + " = " + 2 ** x);
    }
}

potencias();

//Exercise 5
function calcularFactorial() {
    let total = 1;
    let numero = 5;
    
    for (numero; numero > 0; numero--){
        total *= numero;
    }
    console.log("El factorial de 5 es = " + total);
}

calcularFactorial();

//Exercise 6
function calcularImc() {
    let pesoPersona1 = 70;
    let alturaPersona1 = 1.70;

    let pesoPersona2 = 90;
    let alturaPersona2 = 1.90;

    function matematico(peso, altura) {
        let resultado = peso / altura ** 2;
        return resultado;
    }

    let resultadoPersona1 = matematico(pesoPersona1, alturaPersona1).toFixed(2);
    let resultadoPersona2 = matematico(pesoPersona2, alturaPersona2).toFixed(2);
    
    if (resultadoPersona1 > resultadoPersona2) {
        console.log("O IMC " + resultadoPersona1 + " da primeira persoa é maior que o da segunda persoa " + resultadoPersona2);
    } else {
        console.log("O IMC " + resultadoPersona2 + " da segunda persoa é maior que o da primeira persoa " + resultadoPersona1);
    }
}

calcularImc();

//Exercise function
function calcularDescuento(precio, porcentaje) {
    return precio = precio - (precio * (porcentaje / 100));
}

console.log(calcularDescuento(8, 10));

//Exercise 1 Strings
const cadea = 'desenvolvemento web';

let novaCadea = cadea.replace("d", "D");

console.log(novaCadea);

//Exercise 2 Strings
function invertirCadea(cadena) {
    return cadena.split('').reverse().join('');
}

console.log(invertirCadea("cadena"));

//Exercise 3 Strings
function enmascarar(cadenaNumeros) {
    return cadenaNumeros.slice(-4).padStart(cadenaNumeros.length, "*");
}
console.log(enmascarar("1234123412347777"));

//Exercise 1 numbers
function cifrasNumero(numero){
    return numero.toString().trim().length;
}

console.log(cifrasNumero(77));

//Exercise 1 Math
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 3) + 1);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(5, 10));

//Exercise 2 Math
function devolverHorasyMinutos(numero) {
    let horas = numero / 60;
    let minutos = numero % 60;
    let cadena = Math.floor(horas) + " horas y " + minutos + " minutos";
    return cadena;
}

console.log(devolverHorasyMinutos(185));

//Exercise 3 Math
function areaCirculo(radio) {
    return Math.PI * (radio ** 2);
}

function perimetroCiruclo(radio) {
    return Math.PI * radio * 2;
}

console.log("El área es = " + areaCirculo(4).toFixed(2) + " y el perímetro es = " + perimetroCiruclo(4).toFixed(2))

//Exercise 1 Date
function mostrarDiaDeLaSemana() {
    let data = new Date("2024-07-25");
    const nomesDia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    console.log(nomesDia[data.getDay()]);
}

mostrarDiaDeLaSemana();

//Exercise 2 Date
function numeroDiaMes(mes, ano) {
    let fecha = new Date(ano, mes, 0);
    return fecha.getDate();
}

console.log(numeroDiaMes(2, 2024));

//Exercise 3 Date
function esFinDeSemana(data) {
    if (data.getDay() == 0 || data.getDay() == 6) {
        return true;
    } else {
        return false;
    }
}

console.log(esFinDeSemana(new Date(2024, 9, 19)));

//Exercise 4 Date
function diasTranscurridos(data) {
    let primerDiaAno = new Date(data.getFullYear(), 0, 1);

    let diferencia = data - primerDiaAno;
    return Math.floor(diferencia / (1000 * 3600 * 24) + 1);
}

console.log(diasTranscurridos(new Date(2024, 1, 12)));

//Exercise 1 Array
function indices(elemento, array) {
    let repetidos = [];
    for (let indice = 0; indice <= array.length; indice++) {
        if (array[indice] == elemento) {
            repetidos.push(indice);
        }
    }
    return repetidos;
}

const numeros = [2, 5, 3, 1, 0, 1];
console.log(indices(1, numeros));

//Exercise 2 Array
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

froitas.splice(1, 1);
console.log(froitas);

froitas.splice(3, 0, "laranxas", "sandías");
console.log(froitas);

froitas.splice(2, 1, 'cereixas', 'nesperas');
console.log(froitas);

//Exercise 3 Array

//Como copiar arrays superficial, si hay objetos apunta direccion de memoria
const oldArray = [0, 1, 2];
let newArray = oldArray.slice();
let newnewArray = [...oldArray];
let newnewnewArray = Array.from(oldArray);

//Copia superficial escalonada, no apunta direccion de memoria
let supernewArray = JSON.parse(JSON.stringify(oldArray));

//Desestructurar arrays = tomar valores por separado
let arreglo = [1, 2, 3];
let a, b, c;
[a, b, c] = arreglo; // a toma valor del primer hueco del array...

//Exercise 1 DesestructuraArray
const players = [
    [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    ],
    [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
    ],
];
//A
let players1, players2;
[players1] = players;
[, players2] = players;
console.log(players1, players2)
//B
let gk1, fieldPlayers1, gk2, fieldPlayers2;
[gk1, ...fieldPlayers1] = players1;
[gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);
//C

//D
