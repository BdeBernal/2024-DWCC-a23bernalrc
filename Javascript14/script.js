'use strict';
import { Octokit, App } from 'https://esm.sh/octokit';

// Ejercicio 1

async function loadJson(url) {
    try {
        let response = await fetch(url);
        if (response.status == 200) {
            let json = await response.json();
            return json;
        } else {
            throw new Error(response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

loadJson('https://no-such-user.json');

// Ejercicio 2

async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 10;
}

function imprimirResultado() {
    let promesa = wait().then((response) => console.log(response));
}

imprimirResultado();

// Ejercicio 3

// Ejercicio 4

async function tratarJson(url) {
    try {
        let response = await fetch(url);
        
        if (response.ok) {
            let json = await response.json();
            mostrarDatos(json);
        } else {
            throw new Error(response.status);
        }

    } catch (Error) {
        console.log(Error);
    }
}

let body = document.querySelector('body');

function mostrarDatos(data) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    body.append(table);

    let headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    // Crear cabeceras
    let headers = ['Denominación', 'Número de habitantes', 'Superficie', 'Capital'];
    headers.forEach(header => {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let values = [element.Denominación, element.Habitantes, element.Superficie, element.Capitalidad];
        values.forEach(value => {
            let td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
    });
};

tratarJson('municipios.json')