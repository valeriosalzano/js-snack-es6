// Snack 1
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const snack1ContainerDom = document.getElementById('snack1-container');

// inizializzo un array dove inserirò i dati di tutte le bici
bikes = [];

// il numero di bici sarà casuale, lo stampo sul dom
let bikesNumber = randomNumber(10,20);
printP(snack1ContainerDom,`La ricerca ha restituito ${bikesNumber} bici.`);

// popolo "bikes" e ne stampo una lista su dom
for(let i=0; i<bikesNumber; i++){
    bikes.push({name : 'bici'+(i+1) , weight_kg : randomNumber(10,30)/10});
}
printList(snack1ContainerDom,...bikes.map( bike => `${bike.name} ha un peso di ${bike.weight_kg} kg`) );

// cerco il peso maggiore (maxWeight) e lo stampo su dom
const maxWeight= Math.max(...bikes.map( bike => bike.weight_kg));
printP(snack1ContainerDom,`Il peso massimo rilevato nella/e seguente/i bici è: ${maxWeight} kg.`);

// ricavo la/e bici più pesante/i e ne stampo la lista
let heavierBike = bikes.filter( bike => bike.weight_kg == maxWeight );
printList(snack1ContainerDom, ...heavierBike.map(bike => `${bike.name}`));

// Snack2
/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Snack 3
/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

function randomNumber (min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function printP (domLink, ...contents){
    const newP = document.createElement('p');
    newP.innerHTML = contents;
    domLink.append(newP);
}

function printList (domLink,...listItems){
    const newList = document.createElement('ul');
    listItems.forEach(liContent => {
        newListItem = document.createElement('li');
        newListItem.innerHTML = liContent;
        newList.append(newListItem);
    });
    domLink.append(newList);
}