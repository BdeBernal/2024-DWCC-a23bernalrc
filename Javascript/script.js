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