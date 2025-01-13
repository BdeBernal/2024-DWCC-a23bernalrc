'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'super.json');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {

    const header = document.querySelector('header');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    const section = document.querySelector('section')
    
    header.append(h1);
    header.append(p);
    

    for (const element of xhr.response) {
        h1.textContent = element.squadName;
        p.textContent = 'HomeTown: ' + element.homeTown + ' // Formed: ' + element.formed;

        for (const member of element.members) {
            let article = document.createElement('article');
            section.append(article);

            let h2 = document.createElement('h2');
            article.append(h2);
            h2.textContent = member.name;

            let p = document.createElement('p');
            article.append(p);
            p.textContent = 'Secret Identity: ' + member.secretIdentity;

            let p2 = document.createElement('p');
            article.append(p2);
            p2.textContent = 'Age: ' + member.age;

            let p3 = document.createElement('p');
            article.append(p3);
            p3.textContent = 'Superpowers: ';

            let ul = document.createElement('ul');
            article.append(ul);
            
            for (const power of member.powers) {
                let li = document.createElement('li');
                ul.append(li);
                li.textContent = power;
            }
        }
    }
});