/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let myNumber = 10;
let myNumber2 = 5;

if (myNumber > myNumber2) {
  console.log('il numero più grande è ' + myNumber)
} else {
  console.log('il numero più grande è' + myNumber2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if (myNumber !== 5) { console.log('not equal') }
else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNumber3 = 25
if ((myNumber3 % 5) === 0) {
  console.log('è divisibile per 0')
} else {
  console.log('non è divisibile per 0')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNumber4 = 5
let myNumber5 = 13
if (myNumber4 === 8 || myNumber5 === 8) {
  console.log('uno dei due valori è uguale a 8')
} else if ((myNumber4 + myNumber5) === 8) {
  console.log('la loro somma è uguale 8')
} else if (myNumber4 - myNumber5 === 8 || myNumber5 - myNumber4 === 8) {
  console.log('la loro sottrazione è uguale a 8')
} else {
  console.log('nessuno dei due valori è uguale a 8, nè la loro addizione o sottrazione')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + 10);

}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 70;
let totalDiscount = totalShoppingCart2 * 0.8;
if (totalDiscount > 50) {
  console.log(totalDiscount);
} else {
  console.log(totalDiscount + 10);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val1=30;
let val2= 15;
let val3= 40;

if (val1>val2 && val2>val3){
  console.log( val1, val2, val3);
} else if(val1>val3 && val3>val2){
  console.log( val1, val3, val2);
}else if(val2>val1 && val1>val3){
  console.log( val2, val1, val3);
}else if(val2>val3 && val3>val1){
  console.log( val2, val3, val1);
}else if(val3>val1 && val1>val2){
  console.log( val3, val1, val2);
}else  {
  console.log( val3, val2, val1)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNumber6= 18;
if(typeof myNumber6=== "number"){
  console.log ('il valore è un numero');
} else{
  console.log('il valore non è un numero');
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
val4=4
if((val4%2)===0){
  console.log('il numero è pari')
} else{
  console.log('il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val =3
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city= 'Toronto'
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.length=me.skills.length-1


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const list=[];
list[0]=1;
list[1]=2;
list[2]=3;
list[3]=4;
list[4]=5;
list[5]=6;
list[6]=7;
list[7]=8;
list[8]=9;
list[9]=10;

console.log(list);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
list[9]=100;
console.log(list)
