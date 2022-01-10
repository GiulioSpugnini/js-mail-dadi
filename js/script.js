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

//Controllo che la sua email sia presente nell'array
let cont = 0;
for (let i = 0; i < emails.length; i++) {
    if (userMail == emails[i]) {
        cont++;
    }
}
if (cont == 0) {
    alert("Mi dispiace, la tua email non è abilitata all'accesso per questo sito");
    console.log(userMail, 'Non ha l accesso al sito');
}