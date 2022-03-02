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
    // COME???

    // Genero un ciclo for che mi genera tante caselle in base alla difficoltà selezionata
    for (let box = 1; box <= functionDifficulty(); box++) {
        // Creo un nuovo div
        let div = document.createElement('div');
        // Attribuisco all'elemento div la classe box definita nel css
        div.classList.add('box');
        // Scrivo il numero della casella all'interno del div
        div.innerHTML = box;
        
        // Appendo i div creati all'interno dell'HTML
        areaGrid.append(div);

        // Quanti div su ogni riga (voglio che la griglia sia un quadrato)
        if (functionDifficulty() == 100) {
            areaGrid.classList.add('grid-10');
        } else if (functionDifficulty() == 81) {
            areaGrid.classList.add('grid-9');
        } else if (functionDifficulty() == 49) {
            areaGrid.classList.add('grid-7');
        }
    }
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