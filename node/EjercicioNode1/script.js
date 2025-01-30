'use strict';
let urlClientes = 'http://localhost:3000/clientes';
let urlPedidos = 'http://localhost:3000/pedidos';

let text = document.getElementById('text');   
let id;
let info = document.getElementById('info');
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
            info.append(p);
            p.textContent = "Calle del pedido: " + element.enderezo;

            id = element.id;

            let label = document.createElement('label');
            label.textContent = 'Volver a pedir: ';
            info.append(label);
            
            let input = document.createElement('input');
            input.setAttribute('id', 'pedido');
            input.type = 'text';
            input.value = element.pedidoTipico;
            info.append(input);

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
            info.appendChild(p);
            p.textContent = "Pedido actual: " + element.descripcion;

        }
    }
    let boton = document.createElement('input');
    boton.setAttribute('id', 'renovar');
    boton.type = 'button';
    boton.value = 'Realizar pedido';
    info.append(boton);
}

document.addEventListener('click', (event) => {
    if (event.target.id === 'renovar') {
        async function updatePost(post) {
            try {
                let response = await fetch('http://localhost:3000/clientes/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify(post),
                    headers: {
                        'Content-type': 'application/json;charset=utf-8',
                    },
                });
                let data = await response.json();
                console.log(data);
            } catch (error) {
                return error;
            }
        }

        let input = document.getElementById('pedido');
        const newPost = { pedidoTipico: input.value };
        updatePost(newPost);
    }
});