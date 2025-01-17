'use strict';

function random() {
    return Math.floor(Math.random * 1025);
}

let button = document.getElementById('pokeball-small');
button.addEventListener('click', () => {
   console.log('click');
});