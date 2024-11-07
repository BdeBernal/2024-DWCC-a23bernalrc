'use strict';

// A táboa con id = "age-table".

console.log(document.getElementById('age-table'));

// Todos os elementos label dentro da táboa (debería haber 3).

console.log(document.getElementById('age-table').getElementsByTagName('label'));

// O primeiro td da táboa.

console.log(document.getElementById('age-table').querySelector('td'));

// O formulario con name="search".

console.log(document.getElementsByName('search')[0]);

// O primeiro input do formulario anterior.

console.log(document.getElementsByName('search')[0].querySelector('input'));

// O último input do formulario do apartado anterior.

console.log(document.getElementsByName('search')[0].querySelectorAll('input')[1]);
