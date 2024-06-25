/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */

const title = document.querySelector('h1');
const changeTitle = function () {
   title.innerText = 'Questo è il nuovo titolo';
}
changeTitle();
/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
   title.classList.add('myHeading');
}
addClassToTitle();
/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
   const testo = document.querySelectorAll('div p');
   testo.forEach(element => {
      element.innerText = 'questo è il nuovo testo'

   });
}
changePcontent()

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
   const changeLinks = document.querySelectorAll('a:not(footer a)');
   changeLinks.forEach(element => {
      element.setAttribute('href', 'https://www.taylorswift.com/');
   });

}
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
   const elementoLista = document.getElementById('secondList');
   const nuovoElemento = document.createElement('li');
   nuovoElemento.innerText = ('nuovo elemento lista');
   elementoLista.appendChild(nuovoElemento);

}
addToTheSecond()

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
   const primoDiv = document.querySelector('div');
   const primoParagrafo = document.createElement('p');
   primoParagrafo.innerText = ('Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter.');
   primoDiv.appendChild(primoParagrafo);
}
addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
   const eliminaLista = document.getElementById('firstList');
   eliminaLista.remove();
}
hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
   const sfondoVerde = document.querySelectorAll('ul');
   sfondoVerde.forEach(element => {
      element.classList.add('green');
   });
}
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
   title.addEventListener('click', function () {
      title.innerText = title.innerText.slice(0, -1)
   });

};
makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

/*const revealFooterLink = function () {
   const ultimo = document.getElementById('fondo');
   ultimo.addEventListener('click', function () {
      const myClick = document.getElementById('fondo').getAttribute('href');
      alert = ('myClick');

   })
}
revealFooterLink();*/
/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
const album=[
   {
      Images:'https://www.gannett-cdn.com/authoring/authoring-images/2024/04/18/USAT/73369582007-006-reputation-2017.jpg',
      prodotto: 'Reputation',
      quantita : 10,
      prezzo: '$15',
   },
   {
      Images:'https://www.udiscovermusic.com/wp-content/uploads/2019/08/Taylor-Swift-Lover-album-cover-820-1024x1024.jpg',
      prodotto:'Lover',
      quantita: 6,
      prezzo: '$20',
   },
   {
      Images:'https://i.iheart.com/v3/re/new_assets/63502b9eaee0f4b0e56f9a54?ops=contain(1480,0)',
      prodotto:'Midnights',
      quantita:30,
      prezzo:'$22',
   },
   {
      Images: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg',
      prodotto: '1989',
      quantita: 17,
      prezzo: '$25',
   },
   {
      Images: 'https://snworksceo.imgix.net/ame-egl/be693c9d-a8fe-4082-b427-76bdb8353049.sized-1000x1000.jpg?w=1000',
      prodotto: 'Folklore',
      quantita: 40,
      prezzo: '$30',
   },
];
const generateTable = function () {
   //creazione contorno tabella//
   const areaTabella=document.getElementById('tableArea');
   const tabella=document.createElement('table');
   const testaTabella=document.createElement('thead');
   const corpoTabella=document.createElement('tbody');
 //creazione parte superiore della tabella//
 const testaImg=document.createElement('th');
 const testaProdotto=document.createElement('th');
 const testaQuantità=document.createElement('th');
 const testaPrezzo=document.createElement('th');
 const linea=document.createElement('tr')
 //associare i contenuti alla parte superiore//
 testaImg.innerText='Cover Album';
 testaProdotto.innerText='Nome Album';
 testaQuantità.innerText='Quantità';
 testaPrezzo.innerText='Prezzo';
 
 linea.appendChild(testaImg);
 linea.appendChild(testaProdotto);
 linea.appendChild(testaQuantità);
 linea.appendChild(testaPrezzo);

 testaTabella.appendChild(linea);
 tabella.appendChild(testaTabella);

 //creazione corpo tabella//
 for (let i = 0; i < album.length; i++){
 const corpoImg=document.createElement('td');
 const corpoProdotto=document.createElement('td');
 const corpoQuantità=document.createElement('td');
 const corpoPrezzo=document.createElement('td');
 const lineaCorpo=document.createElement('tr');
 const img=document.createElement('img')
//associare i contenuti al corpo//
img.setAttribute('src', album[i].Images);
corpoImg.appendChild(img);
corpoProdotto.innerText=album[i].prodotto;
corpoQuantità.innerText=album[i].quantita;
corpoPrezzo.innerText=album[i].prezzo;

lineaCorpo.appendChild(corpoImg);
lineaCorpo.appendChild(corpoProdotto);
lineaCorpo.appendChild(corpoQuantità);
lineaCorpo.appendChild(corpoPrezzo);

corpoTabella.appendChild(lineaCorpo);
}
tabella.appendChild(corpoTabella);
areaTabella.appendChild(tabella);
};
generateTable();

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
const nuovoAlbum={
   images:'https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa',
   prodotto:'The tortured poets department',
   quantità:30,
   prezzo:'$29',
}
const addRow = function (album) {
   //costruiamo gli elementi della nuova riga//
   const areaTabella=document.getElementById('tableArea');
   const tabella=document.querySelector('table');
   const corpoTabella=document.querySelector('tbody');
   const corpoImg=document.createElement('td');
   const corpoProdotto=document.createElement('td');
   const corpoQuantità=document.createElement('td');
   const corpoPrezzo=document.createElement('td');
   const lineaCorpo=document.createElement('tr');
   const img=document.createElement('img')


   //associare i contenuti al corpo//
img.setAttribute('src', nuovoAlbum.images);
corpoImg.appendChild(img);
corpoProdotto.innerText=nuovoAlbum.prodotto;
corpoQuantità.innerText=nuovoAlbum.quantità;
corpoPrezzo.innerText=nuovoAlbum.prezzo;

lineaCorpo.appendChild(corpoImg);
lineaCorpo.appendChild(corpoProdotto);
lineaCorpo.appendChild(corpoQuantità);
lineaCorpo.appendChild(corpoPrezzo);

corpoTabella.appendChild(lineaCorpo);
tabella.appendChild(corpoTabella);
areaTabella.appendChild(tabella);
}
addRow();

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

/*const hideAllImages = function () {
   const immaginiNascoste=document.querySelectorAll('img')
   immaginiNascoste.forEach(element=>{
     (element.style.display='none');
      
   })
 }
   hideAllImages()*/

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
   const titoloColorato= document.getElementById('titolo2');

 }