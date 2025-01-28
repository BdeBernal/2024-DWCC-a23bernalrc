'use strict';

let url = "http://localhost:3000/municipios";

function mostrarDatos() {
    let promise = fetch(url);
    promise
        .then(response => response.json())
        .then(data => {
            for (const element of data) {
                console.log(element)
            }
        });
}

mostrarDatos();