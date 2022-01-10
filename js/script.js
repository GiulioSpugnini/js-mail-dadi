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
userMail = prompt("Inserisci la tua email").trim();
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
} else {
    console.log(userMail, 'Ha l accesso al sito');
}

/*
Gioco dei Dadi

1.Genero un numero random da 1 a 6 per cpu
2.Genero un numero random da 1 a 6 per l'utente
3.Controllo qual è più alto e gestisco eventuali pareggi
4.Stampo in console i tiri del dado e del risultato
*/

//Genero un numero random da 1 a 6 per cpu
const cpuNumber = Math.floor(Math.random() * 6 + 1);
//Genero un numero random da 1 a 6 per l'utente
const userNumber = Math.floor(Math.random() * 6 + 1);
//Controllo qual è più alto e gestisco eventuali pareggi
if (cpuNumber == userNumber) {
    console.log('PAREGGIO');
} else if (cpuNumber > userNumber) {
    console.log('CPU HA VINTO !')
} else if (cpuNumber < userNumber) {
    console.log('L UTENTE HA VINTO !')
}
//Stampo in console i tiri del dado e del risultato
console.log('LA CPU HA FATTO', cpuNumber);
console.log('L UTENTE HA FATTO', userNumber);