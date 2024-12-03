'use strict';

const ajustes = document.getElementById('ajustes');
ajustes.addEventListener('change', event => {
    const ancho = document.getElementById('width');
    const alto = document.getElementById('height')
    const colorear = document.getElementById('redimensionar');

    if (event.target == ancho) {
        colorear.style.width = ancho.value + 'px';
    } else if (event.target == alto) {
        colorear.style.height = alto.value + 'px';
    }
});

const bloque = document.getElementById('bloque');
bloque.addEventListener('click', event => {
    const escribir = document.getElementById('escribir');

    event.target.closest('div').style.display = 'none';
    escribir.style.display = 'block';
    escribir.focus();
});

const escribir = document.getElementById('escribir');
escribir.addEventListener('blur', () => {

    const texto = escribir.value;
    escribir.style.display = 'none'

    bloque.style.display = 'block';
    bloque.textContent = texto;

});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {

    // Limpiar tablero
    const tablero = document.getElementById('tresenraya');
    const casillas = tablero.querySelectorAll('div');

    casillas.forEach(casilla => {
    casilla.innerHTML = '';
    });
    
});

const tablero = document.getElementById('tresenraya');
tablero.addEventListener('click', event => {
    
});