'use strict';

// Añadir elementos
function añadirItem() {
    const texto = document.getElementById('nuevoItem').value; // Obtener valor de input text
    const p = document.createElement('p'); // Crear nuevo p
    const a = document.createElement('a'); // Crear nuevo a
    const div = document.createElement('div'); // Crear nuevo div
    const lista = document.getElementById('lista');

    const comprobacion = Array.from(lista.getElementsByTagName('p')).map(item => item.textContent);
    // Comprobar si ya existe el elemento en la lista

    if (comprobacion.includes(texto) || texto === "") {
        document.getElementById('nuevoItem').value = ""; // Limpiar el input text
    } else {
        document.getElementById('lista').append(div); // Añadir div
        div.append(p); // Añadir 
        div.append(a); // Añadir
        a.textContent = "X"; // Añadir texto
        p.textContent = texto; // Añadir texto
        div.setAttribute('class', 'elemento'); // Añadir clase


        document.getElementById('nuevoItem').value = ""; // Limpiar el input text
    }
}

const añadir = document.getElementById('engadir');
añadir.addEventListener("click", añadirItem);

// Borrar elementos 
const borrar = document.getElementById('Borrar');
const padreLista = document.getElementById('lista');

borrar.addEventListener('click', borrarItems);

function borrarItems() {
    while (padreLista.firstChild) {
        padreLista.removeChild(padreLista.firstChild);
    }
}

// Eliminar uno
padreLista.addEventListener('click', event => {
    if (event.target.closest('a')) {
        event.target.closest('div').remove();
    }
});

// Actualizar
padreLista.addEventListener('click', event => {
    const p = event.target.closest('p');

    if (p) {
        const ocultar = document.getElementById('engadir');
        const mostrar = document.getElementById('actualizar');

        ocultar.style.display = 'none';
        mostrar.style.display = 'block';

        actualizar(p)
    }
});

function actualizar(p) {
    const texto = p.textContent;
    const input = document.getElementById('nuevoItem');
    input.value = texto;

    const actualizar = document.getElementById('actualizar');
    actualizar.addEventListener('click', () => {
        p.textContent = input.value;
        input.value = '';

        const ocultar = document.getElementById('engadir');
        const mostrar = document.getElementById('actualizar');

        ocultar.style.display = 'block';
        mostrar.style.display = 'none';
    });
};

const filtrar = document.getElementById('filtro');
filtrar.addEventListener('input', event => {
    const lista = document.getElementById('lista');
    const elementos = Array.from(lista.getElementsByTagName('div'));

    for (const elemento of elementos) {
        const p = elemento.querySelector('p');
        if (p.textContent.startsWith(event.target.value)) {
            elemento.style.display = 'inline-block';
        } else {
            elemento.style.display = 'none';
        }
    }
});