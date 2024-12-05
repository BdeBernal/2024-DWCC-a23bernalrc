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
    const resultado = document.getElementById('resultado');

    casillas.forEach(casilla => {
    casilla.textContent = '';
    });

    resultado.textContent = '';
    resultado.style.zIndex = -1;
    
});

const tablero = document.getElementById('tresenraya');
function handleClick(event) {
    const info = document.getElementById('info');
    const currentTurn = info.textContent.includes('X') ? 'X' : 'O';
    const resultado = document.getElementById('resultado');

    if (event.target.textContent === '') {
        event.target.textContent = currentTurn;
        info.textContent = `Turno del jugador = ${currentTurn === 'X' ? 'O' : 'X'}`;
    }

    const si = Array.from(tablero.querySelectorAll('div div')).map(item => item.textContent.trim());

    // Check for X winning combinations
    if (
        si[0] === 'X' && si[1] === 'X' && si[2] === 'X' ||
        si[3] === 'X' && si[4] === 'X' && si[5] === 'X' ||
        si[6] === 'X' && si[7] === 'X' && si[8] === 'X' ||
        si[0] === 'X' && si[4] === 'X' && si[8] === 'X' ||
        si[2] === 'X' && si[4] === 'X' && si[6] === 'X' ||
        si[1] === 'X' && si[4] === 'X' && si[7] === 'X' ||
        si[0] === 'X' && si[3] === 'X' && si[6] === 'X' ||
        si[2] === 'X' && si[5] === 'X' && si[8] === 'X'
    ) {
        resultado.textContent = '¡Gana el jugador X!';
        resultado.style.zIndex = 1;
    }
    // Check for O winning combinations
    else if (
        si[0] === 'O' && si[1] === 'O' && si[2] === 'O' ||
        si[3] === 'O' && si[4] === 'O' && si[5] === 'O' ||
        si[6] === 'O' && si[7] === 'O' && si[8] === 'O' ||
        si[0] === 'O' && si[4] === 'O' && si[8] === 'O' ||
        si[2] === 'O' && si[4] === 'O' && si[6] === 'O' ||
        si[1] === 'O' && si[4] === 'O' && si[7] === 'O' ||
        si[0] === 'O' && si[3] === 'O' && si[6] === 'O' ||
        si[2] === 'O' && si[5] === 'O' && si[8] === 'O'
    ) {
        resultado.textContent = '¡Gana el jugador O!';  
        resultado.style.zIndex = 1;
    } else if (
        si.every(item => item !== '')
    ) {
        resultado.textContent = '¡Empate!';
        resultado.style.zIndex = 1;
    }
}

// Add event listener with the named function
tablero.addEventListener('click', handleClick);
