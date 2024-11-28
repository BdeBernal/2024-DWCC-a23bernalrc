'use strict';

// Añadir elementos
function añadirItem() {
    const texto = document.getElementById('nuevoItem').value; // Obtener valor de input text
    const p = document.createElement('p'); // Crear nuevo p
    const lista = document.getElementById('lista');

    const comprobacion = Array.from(lista.getElementsByTagName('p')).map(item => item.textContent);
    // Comprobar si ya existe el elemento en la lista

    if (comprobacion.includes(texto) || texto === "") {
        document.getElementById('nuevoItem').value = ""; // Limpiar el input text
    } else {
        document.getElementById('lista').append(p);
        p.append(texto); // Añadir 

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
    if (event.target.closest('p')) {
        event.target.remove();
    }
});