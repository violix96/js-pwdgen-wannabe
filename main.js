// reset js
'use strict';


// Salvo l'elemento paragrafo all'interno di una variabile
let currentElement = document.getElementById('password');

// riciclo il valore iniziale della variabile
let currentText = currentElement.innerHTML;

// chiedo i valori all'utente 

const userName = prompt ('Inserisci il tuo nome')

const userLastName = prompt ('Inserisci il tuo cognome')

const userFavColor = prompt ('Inserisci il tuo colore preferito')

// Interpolazione e quindi cambio di valori di currentText 
currentText = `${currentText}${userName}${userLastName}${userFavColor}21`;