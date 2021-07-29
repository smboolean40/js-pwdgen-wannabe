// 1) Chiedi all’utente il suo nome
var firstname = prompt('Inserisci il tuo nome');
// 2) poi chiedi il suo cognome,
var lastname = prompt('Inserisci il tuo cognome');
// 3) poi chiedi il suo colore preferito
var color = prompt('Inserisci il tuo colore preferito');
// 4) creo la password concatenando nome+cognome+colore+40
var password = firstname + lastname + color + "40";
// 5) Infine scrivi sulla pagina la password concatenazione
document.getElementById('password').innerHTML += password;
// document.getElementById('password').innerHTML = document.getElementById('password').innerHTML + password;