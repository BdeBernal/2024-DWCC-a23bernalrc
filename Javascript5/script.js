'use strict';

// Ejercicio 1 
function mostrarSpan() {
    const span = document.getElementById('adicional');
    span.removeAttribute("hidden");

    link.setAttribute("hidden", "hidden");
}

const link = document.getElementById('ligazon');
link.addEventListener("click", mostrarSpan);

// Ejercicio 2
function textoLista() {
    const texto = document.getElementById('textoLista').value;
    const li = document.createElement('li');

    document.getElementById('lista').append(li);
    li.append(texto);

}

const añadir = document.getElementById('añadirLista');
añadir.addEventListener("click", textoLista);

// Ejercicio 3
const button = document.getElementById('button');

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2); // El 1 y el 3 porque al estar creado el manejador de eventos de esa forma js no reconoce que es el mismo

// Ejercicio 4
function mostrarDulces() {
    const restoDulces = document.getElementById('dulces');
    restoDulces.removeAttribute("hidden");
}

const dulces = document.getElementById('clicable');
dulces.style.cursor = 'pointer';
dulces.addEventListener("click", mostrarDulces);

// Ejercicio 5
