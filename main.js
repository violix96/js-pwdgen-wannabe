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

// bonus numero random 
let randomNumber = Math.floor((Math.random() * 100) + 21);

// Interpolazione e quindi cambio di valori di currentText 
currentText = `${currentText}${userName}${userLastName}${userFavColor}${randomNumber}`;

// scrivo in console 
console.log(currentText);

// scrivo nel browser e dichiaro che adesso currentElement vale currentText
currentElement.innerHTML = currentText;