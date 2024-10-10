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
    return Math.random() * (max - min) + min;
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
//Exercise 2 Date
//Exercise 3 Date
//Exercise 4 Date

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
function palabras(string) {
    const array = string.split(" ");
    for (let indice = 0; indice <= array.length; indice++){
        
    }
}

console.log(palabras("tinky Winky, dipsy, lala, Po"));