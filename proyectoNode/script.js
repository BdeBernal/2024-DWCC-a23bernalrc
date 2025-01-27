'use strict';
let urlClientes = 'http://localhost:3000/clientes';
let urlPedidos = 'http://localhost:3000/pedidos';

let text = document.getElementById('text');   
let body = document.querySelector('body');
let button = document.getElementById('button');
button.addEventListener('click', () => {
    let promesa = fetch(urlClientes);

    promesa
        .then((response) => response.json())
        .then((data) => mostrarCliente(data));
});

function mostrarCliente(data) {
    for (const element of data) {
        if (text.value == element.telefono) {
            let p = document.createElement('p');
            body.appendChild(p);
            p.textContent = "Calle del pedido: " + element.enderezo;

            fetch(urlPedidos)
                .then((response) => response.json())
                .then((pedidos) => mostrarPedido(pedidos, text.value));
        }
    }
}

function mostrarPedido(pedidos, tlf) {
    for (const element of pedidos) {
        if (tlf == element.telefonoCliente) {
            let p = document.createElement('p');
            body.appendChild(p);
            p.textContent = element.descripcion;
        }
    }
}