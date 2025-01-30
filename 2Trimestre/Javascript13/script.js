'use strict';

let id = document.getElementById('number');
let show = document.getElementById('posts');

const button = document.getElementById('button');
button.addEventListener('click', () => {

    let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + id.value;
    
    fetch(url)
        .then((response) => response.json())
        .then((posts) => mostrarDatos(posts));
    
    function mostrarDatos(posts) {
        for (const post of posts) {
            let postId = document.createElement('p');
            postId.textContent = 'Id: ' + post.id;
            show.append(postId);

            let title = document.createElement('p');
            title.textContent = 'Title: ' + post.title;
            show.append(title);

            let info = document.createElement('p');
            info.textContent = 'Info: ' + post.body;
            show.append(info);
        }
    }
});