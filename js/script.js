console.log('OK js!');
/*
MAIL

1.Creo un array di email
2.Chiedo all'utente la sua email
3.Controllo che la sua email sia presente nell' array
4.Stampo la risposta in base al risultato del controllo
*/

// Creo un array di email
let emails = ['alberto@gmail.com', 'bertoldo@yahoo.com', 'giulio@yahoo.com'];
console.log(emails);

//Chiedo all'utente la sua email
userMail = prompt("Inserisci la tua email");
console.log(userMail);
if (!isNaN(userMail) || userMail == null) {
    alert("Hai inserito l'input sbagliato, ti prego di riprovare")
}