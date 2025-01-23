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
    body.append(table);

    data.forEach(element => {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        Object.entries(element).forEach(([key, value]) => {
            let td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
    });
};

tratarJson('municipios.json')