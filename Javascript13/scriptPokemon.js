'use strict';

function random() {
    return Math.floor(Math.random() * 1025);
}

let img = document.querySelector('img');
let nombre = document.getElementById('nombre');
let tipos = document.getElementById('tipos');
let extra = document.querySelector('div .pokemon-details');
let ul = document.getElementById('stats');
let ul2 = document.getElementById('abilities');

let button = document.querySelector('div .pokeball-small');
button.addEventListener('click', () => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + random();

    fetch(url)
        .then((response) => response.json())
        .then((pokemon) => mostrarPokemon(pokemon))
    
    function mostrarPokemon(info) {

        // Show the pokemon picture and name
        img.setAttribute('src', info.sprites.front_default);
        nombre.textContent = info.name;

        // Show the pokemon types if both check
        tipos.textContent = info.types[0].type.name;
        if (info.types[1]) {
            tipos.textContent += ' ' + info.types[1].type.name;
        }

        ul.innerHTML = ''; // Clear previous stats
        // Show stats
        for (const important of info.stats) {
            let li = document.createElement('li');
            ul.append(li);
            li.textContent = important.base_stat + ' ' + important.stat.name;
        }

        ul2.innerHTML = ''; // Clear previous abilities
        // Show abilities
        for (const slot of info.abilities) {

            let li = document.createElement('li');
            ul2.append(li);
            let a = document.createElement('a');
            li.append(a);
            a.textContent = slot.ability.name;
            a.setAttribute('href', slot.ability.url)
        }
    }
});