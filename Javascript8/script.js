'use strict';

//1. Implementa unha función escribirNumeros(desde, ata) que xere un número cada
//segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
//función: unha usando setInterval e outra usando setTimeout.

function escribirNumeros(desde, ata) {
    const intervalID = setInterval(() => {
        console.log(desde);
        if (desde === ata) {
            clearInterval(intervalID);
        }
        desde++;
    }, 1000
    ); 
}

escribirNumeros(1, 10);

function escribirMasNumeros(desde, ata) {
    if (desde <= ata) {
        setTimeout(() => {
            console.log(desde);
            escribirMasNumeros(desde + 1, ata);
        }, 1000);
    }
};

escribirMasNumeros(1, 10);

//2. Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar
//un intervalo que cambie alternativamente cada segundo a cor do título <h1>
//alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e
//parar o cambio de cores.

let idInterval;

const color = document.getElementById('cambiarColor');
const h1 = document.getElementById('h1');
const parar = document.getElementById('parar');

color.addEventListener('click', () => {
    if (!idInterval) {
        idInterval = setInterval(() => {
            if (h1.style.color == 'black') {
                h1.style.color = 'red';
            } else {
                h1.style.color = 'black';
            }
        }, 1000)
    }
});

parar.addEventListener('click', () => {
    clearInterval(idInterval);
});

//3. Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
//Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra
//unha mensaxe en consola.

let img = document.createElement('img');
document.body.appendChild(img)
img.setAttribute('src', 'https://images.pexels.com/photos/30098120/pexels-photo-30098120/free-photo-of-imagen-en-blanco-y-negro-de-la-entrada-a-la-historica-torre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
img.addEventListener('load', () => {
    console.log("Imagen cargada")
})