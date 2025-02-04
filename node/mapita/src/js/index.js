'use strict';

import L from "leaflet";

const map = L.map('map', {
  center: L.latLng(42.88052, -8.54569),
  zoom: 14,
});

const key = 'IVXROne3svYpdbaa6xXB';
let form = document.getElementById('form');
let text = document.getElementById('text');
let button = document.getElementById('button');
let ul = document.querySelector('div > ul');

L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,{ //style URL
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);

let popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(
        'You clicked the map at -<br>' +
        '<b>lon:</b> ' +
        e.latlng.lng +
        '<br>' +
        '<b>lat:</b> ' +
        e.latlng.lat
    )
    .openOn(map);
    
  generarMarker(e.latlng);
}
map.on('click', onMapClick);

function generarMarker(info) {

  form.style.display = 'flex';
  text.focus();

  button.addEventListener('click', () => {

    map.closePopup();
    
    let marker = L.marker([info.lat, info.lng]).addTo(map);
    marker.bindPopup(text.value);

    let li = document.createElement('li');
    ul.append(li);
    li.textContent = text.value;
  });
}