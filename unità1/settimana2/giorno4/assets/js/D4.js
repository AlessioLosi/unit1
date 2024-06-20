/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return ((l1 * l2) / 2)
}
console.log(area(10, 10))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(val1, val2) {
    if (val1 === val2) {
        return ((val1 + val2) * 3)
    } else {
        return (val1 + val2)
    }
}
console.log(crazySum(3, 3))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(val3) {
    if (val3 <= 19) {
        return ( Math.abs(val3 - 19))
    } else {
        return (Math.abs((val3 - 19) * 3))
    }
}
console.log(crazyDiff(21))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (20 <= n && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(101))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myString = 'Epicode , il corso per diventare developer'
const lista = myString.split(' ');
console.log(lista)

function epify(lista) {

    if (lista.split [0] === 'Epicode') {
        return (lista)
    } else {
        return ('Epicode ' + lista)
    }
}

console.log(epify)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(val4) {
    if (val4 % 7 === 0) {
        return ('il parametro è un multiplo di 7')
    } else if (val4 % 3 === 0) {
        return ('il paramentro è un multiplo di 3')
    } else {
        return ('il parametro non è un multiplo di 3 o 7')
    }

}
console.log(check3and7(3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myString2='epicode'
const myString3= myString2.split('')
function reverseString(){
    return myString3.reverse
}
console.log(reverseString())

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myString4='Elimina la prima lettera'
let myString5 = myString4.slice('')
function cutString( myString5){
    return myString4.slice(1,-1)
}
console.log (cutString())
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */  

function giveMeRandom(){
    let n1 = Math.floor(Math.random ()* 10);
    return('il numero generato è '+ n1)

}
console.log (giveMeRandom())