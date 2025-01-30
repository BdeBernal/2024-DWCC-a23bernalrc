'use strict';

const card = document.querySelector('.card');
card.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => mostrarDatos(data))
        .catch(error => {
            console.error('Error:', error);
        });
    
    function mostrarDatos(data) {
        let info = data.results[0];

        const img = document.querySelector('.card-image');
        const name = document.querySelector('ul > li:nth-child(1)');
        const age = document.querySelector('ul > li:nth-child(2)');
        const city = document.querySelector('ul > li:nth-child(3)');

        img.setAttribute('src', info.picture.large)
        name.textContent = 'Name: ' + info.name.first;
        age.textContent = 'Age: ' + info.dob.age;
        city.textContent = 'City: ' + info.location.city;
    }
});