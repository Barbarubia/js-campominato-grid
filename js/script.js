// Seleziono l'elemento HTML corrispondente al bottone play
const buttonPlay = document.getElementById('play');

// Seleziono l'elemento HTML all'interno del quale genererò la griglia
const areaGrid = document.getElementById('grid');

// Cosa succede se clicco sul bottone play?
// Eseguo una funzione che genera la griglia di gioco
buttonPlay.addEventListener('click', generateGrid);


// Scrivo la funzione che mi genera una griglia di N elementi, dove N dipende dalla difficoltà selezionata
function generateGrid() {
    // Se clicco 2 volte consecutive non voglio che mi generi 2 griglie, quindi ad ogni click prima ripulisco l'area
    areaGrid.innerHTML = '';
    // Devo rimuovere anche le classe aggiuntive che stabiliscono il numero di elementi per riga
    areaGrid.classList.remove('grid-10');
    areaGrid.classList.remove('grid-9');
    areaGrid.classList.remove('grid-7');

    // Genero un ciclo for che mi genera tante caselle in base alla difficoltà selezionata
    for (let numBox = 1; numBox <= functionDifficulty(); numBox++) {
        // Creo un nuovo div
        let box = document.createElement('button');
        // Attribuisco all'elemento box la classe box definita nel css
        box.classList.add('box');
        // Scrivo il numero della casella all'interno del box
        box.innerHTML = numBox;
        
        // Appendo i div creati all'interno dell'HTML
        areaGrid.append(box);

        // Quanti div su ogni riga (voglio che la griglia sia un quadrato)
        if (functionDifficulty() == 100) {
            areaGrid.classList.add('grid-10');
        } else if (functionDifficulty() == 81) {
            areaGrid.classList.add('grid-9');
        } else if (functionDifficulty() == 49) {
            areaGrid.classList.add('grid-7');
        }
    
    }

// GENERATORE DI 5 NUMERI CASUALI: """""QUESTA PARTE ANCORA NON SERVE"""""
    // Creo un array, inizialmente vuoto per i numeri random da non cliccare
    const arrBombs = []

    // Riempio l'array con 5 numeri senza ripetizioni
    while (arrBombs.length < 5) {
        let randomBox = Math.floor(Math.random() * functionDifficulty() + 1);
        if (!arrBombs.includes(randomBox)) {
            arrBombs.push(randomBox);
        }
    }
    console.log(arrBombs);

}


/*
Da quante caselle deve essere composta la griglia?
Dipende dalla difficoltà selezionata:
Facile: 100 caselle (10 x 10)
Media: 81 caselle (9 x 9)
Difficile: 49 caselle (7 x 7)
*/
function functionDifficulty() {
    // Seleziono l'elemento HTML dove il giocatore sceglie la difficoltà
    let inputDifficulty = document.getElementById('difficulty');
    // Leggo la difficoltà selezionata dal giocatore
    let selectedDifficulty = inputDifficulty.value;
    if (selectedDifficulty == "facile") {
        return 100;
    } else if (selectedDifficulty == "media") {
        return 81;
    } else {
        return 49;
    }
}