'use strict';

//¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro
//en f1?

//promise.then(f1).catch(f2); Si se produce un error en f1 el catch de f2 lo captura
//promise.then(f1, f2); Si se produce un error en f1 no caputra nadie 

// ¿Cal é a saída do seguinte código? ¿Por que?
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();
promise
    .then(() => console.log("Success 1"))
    .then(() => console.log("Success 2"))
    .then(() => console.log("Success 3"))
    .catch(() => console.log("Error 1"))
    .then(() => console.log("Success 4"));

// EL catch devuelve la promesa que resuelve y da lugar al Success 4

// ¿Cal é o resultado do seguinte código? ¿Por que?
let promise2 = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise2.then(console.log); // LLega a la primera promesa y ya se resuelve no se reejecuta

// ¿Cal é a saída do seguinte código? ¿Por que?
function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}
let promise3 = job(true);

promise3
    .then(function (data) {
        console.log(data);
        return job(false); // Se resuelve y devuelve la promesa rechazada
    })
    .catch(function (error) {
        console.log(error);
        return "Error caught"; // se resuelve porque es un string encapsulado 
    })
    .then(function (data) {
        console.log(data); // Aqui acaba porque no de rechaza para continuar
        return job(true);
    })
    .catch((error) => console.log(error));

// Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A
// promesa debe resolverse despois de tres segundos dende que se chamou á función
// e debe devolver o parámetro pasado á función.
// Para probala, fai unha chamada á túa función e mostra por consola o que devolve.

function prometido(param) {
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            resolve(param);
        }, 3000);
    });
};

let prometida = prometido(11);

prometida
    .then(param => console.log(param));

// Crea unha función que reciba un parámetro e devolva unha promesa.
// a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
// devolver unha mensaxe indicando que “Erro. O parámetro non é un número”.
// b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
// segundo e devolver “impar”.
// c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
// segundos e devolver “par”.

function funcion(a) {
    return new Promise(function (resolve, reject) {
        if (isNaN(a)) {
            reject('Error. No es un número');
        } else {
            if (a % 2 == 0) {
                setTimeout(() => {
                    reject('par');
                }, 2000);
            } else if (a % 2 != 0) {
                setTimeout(() => {
                    resolve('impar');
                }, 1000);
            } 
        }
        
    });
};

let numerines = funcion('a');

numerines
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado));