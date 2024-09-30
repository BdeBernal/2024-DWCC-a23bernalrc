"use strict";

console.log(10);

const i = 20;

console.log(i);

console.warn("Paco");

console.error("Pakito");

console.table({ Nombre: "Paco", Edad: 12 });
// Cuando imprimes un objeto no lo imprime en el momento concreto, imprime su valor final

//Declarar variables
var x = 0; //Dentro de función o global se pueden declarar misma variables mismo nombre, hoisting

let y = 0; // No se puede declarar varibles mismo nombre salvo ámbito de bloque

const z = 0; //Constante para todo el programa, no se puede cambiar valor

//Tipos de datos (boolean, number, NaN, bigInt, string, undefined, null, symbol, object)

let a = {
    name:"John",
    age:22
    };
    let b = a;
    b.name = "Paco";
    console.log('a => ', a);
    console.log('b => ', b);
    
//Nuevo objeto mismo puntero