// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato   
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e 
//"Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

document.getElementById('genera').addEventListener('click', function(){ // al click del bottone 'genera' eseguo la funzione
    document.getElementById('tck').classList.remove('hidden');

   
    var nomeCognome = document.getElementById('nome-pass').value;   
    var km = document.getElementById('km').value;                     // ottengo i valori inseriti nel form
    var age = document.getElementById('age-range').value;

    document.getElementById('tck-nome-pass').innerHTML = nomeCognome;

    // genero la carrozza e il codice cp richiamando la funzione
    var carrozza = generaRandom(1,10); 
    var codice = generaRandom(90000,100000);
    //visualizzo 
    document.getElementById('tck-carrozza').innerHTML = carrozza;
    document.getElementById('tck-cod-cp').innerHTML = codice;


    // var carrozza = Math.floor(Math.random()* 10);                  // genero i numeri random per carrozza e codice CP
    // document.getElementById('tck-carrozza').innerHTML = carrozza;

    // var codice = Math.floor(Math.random()* (99999 - 90000 + 1) + 90000);
    // document.getElementById('tck-cod-cp').innerHTML = codice;

    var prezzo = 0.21 * km; // calcolo il prezzo standard
    prezzo = prezzo.toFixed(2);
    var offerta = 'Prezzo Standard';

    if (age == 'min') {
        prezzo *= 0.8;
        prezzo = prezzo.toFixed(2);
        document.getElementById('tck-prezzo').innerHTML = '€ ' + prezzo;
        offerta = 'Sconto minori di 18 anni';
        document.getElementById('tck-sconto').innerHTML = offerta;
    } else if (age == 'over'){
        prezzo *= 0.6;
        prezzo = prezzo.toFixed(2);
        document.getElementById('tck-prezzo').innerHTML = '€ ' + prezzo;
        offerta = 'Sconto over 65';
        document.getElementById('tck-sconto').innerHTML = offerta;
    } else {
        document.getElementById('tck-prezzo').innerHTML = '€ ' + prezzo;
        document.getElementById('tck-sconto').innerHTML = offerta;
    }

    
});

function generaRandom(min,max){ // la funzione per generare i numeri random
    return Math.floor(Math.random()*(max -min) + min);
}

document.getElementById('annulla').addEventListener('click', function(){ //funzione per il reset dei dati al click del bottone 'annulla'
    location.reload();
});

