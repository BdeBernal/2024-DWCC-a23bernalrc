'use strics';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'super.json');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    
});