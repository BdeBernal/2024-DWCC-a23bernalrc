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
function eventoclick() {
    console.log("Evento de click");
}

function eventodblclick() {
    console.log("Evento de dblclick");
}

function eventocontextmenu() {
    console.log("Evento de contextmenu");
}

function eventomousedown() {
    console.log("Evento de mousedown");
}

function eventomouseup() {
    console.log("Evento de mouseup");
}

function eventowheel() {
    console.log("Evento de wheel");
}

function eventomouseover() {
    console.log("Evento de mouseover");
}

function eventomouseout() {
    console.log("Evento de mouseout");
}

function eventodragstart() {
    console.log("Evento de dragstart");
}

function eventodrag() {
    console.log("Evento de drag");
}

function eventodragend() {
    console.log("Evento de dragend");
}

const imagen = document.getElementById('imagen');

imagen.addEventListener("click", eventoclick);
imagen.addEventListener("dblclick", eventodblclick);
imagen.addEventListener("contextmenu", eventocontextmenu);
imagen.addEventListener("mousedown", eventomousedown);
imagen.addEventListener("mouseup", eventomouseup);
imagen.addEventListener("wheel", eventowheel);
imagen.addEventListener("mouseover", eventomouseover);
imagen.addEventListener("mouseout", eventomouseout);
imagen.addEventListener("dragstart", eventodragstart);
imagen.addEventListener("drag", eventodrag);
imagen.addEventListener("dragend", eventodragend);