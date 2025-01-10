'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'gatas.json');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    let nombres = "";
    let contador = 1;
    for (const element of xhr.response) {
        if (contador != xhr.response.length) {
            nombres += element.name + ', ';
            contador++;
        } else {
            nombres += 'e ' + element.name;
            contador++;
        }
    }
    console.log('Os nomes das gatas son ' + nombres + '.')

    let machos = 0;
    let femias = 0;
    let gatos = 0;

    for (const element of xhr.response) {
        for (const kittens of element.kittens) {
            if (kittens.gender == 'f') {
                femias++;
                gatos++;
            } else if (kittens.gender == 'm') {
                machos++;
                gatos++;
            }
        }
    }
    console.log("Hai " + gatos + " gatiños: " + femias + " femias e " + machos + " machos.")
});