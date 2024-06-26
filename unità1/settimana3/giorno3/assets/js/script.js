//creiamo gli elementi che ci servono per la lista//
const toDoList = document.getElementById('toDoList');
const insertElement = document.getElementById('insertItem');
const btnElement = document.getElementById('btnElement');
const myList = document.getElementById('myList');
const listElement = [];

//stabiliamo il funzionamento del form//
btnElement.addEventListener( 'click', function (e) {
    e.preventDefault();
    if (!controllaElemento()) return;
    aggiungiElementi();
    printList();
    totalList.reset();
    insertElement.value='';
});

function controllaElemento() {
    if (insertElement.value === '') {
        return false
    } else {
        return true
    }
};
function aggiungiElementi() {
    listElement.push( insertElement.value );
};

function printList() {
    listElement.innerHTML = '';
    for (i = 0; i < listElement.length; i++) {

        let elementLi = document.createElement('li');
        elementLi.innerText = listElement[i];
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'button',);
        btnDelete.setAttribute('onclick', `deleteItem(${i});`);
        btnDelete.innerText = '/e872';
        elementLi.appendChild(btnDelete);
        myList.appendChild(elementLi);
    }
};
function deleteItem(index) {
    listElement.splice(index, 1);
    printList();
}