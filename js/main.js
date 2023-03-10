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

const snack2ContainerDom = document.getElementById('snack2-container');

// creo un array con i nomi delle squadre
const teamNames = ["Atalanta","Bologna","Cremonese","Empoli","Fiorentina","Inter","Juventus","Lazio","Lecce","Milan","Monza","Napoli","Roma","Salernitana","Sampdoria","Sassuolo","Spezia","Torino","Udinese","Verona"];

// popolo l'array con le squadre che avranno name, points, fouls.
const soccerTeams = teamNames.map( name => ({name, points : 0, fouls : 0 }));

soccerTeams.forEach(team => {
    team.points = randomNumber(0,10);
    team.fouls = randomNumber(0,5);
})

// stampo la lista delle squadre con i relativi falli subiti
printP(snack2ContainerDom,`Ecco la lista delle squadre con relativi falli subiti:`)
printList(snack2ContainerDom,...soccerTeams.map(team => `${team.name}. Falli subiti: ${team.fouls}`));

// Snack 2 EXTRA 
// cerco la squadra con il punteggio migliore
const maxPoints = Math.max(...soccerTeams.map(team => team.points));

printP(snack2ContainerDom,`Il punteggio massimo rilevato è: ${maxPoints}.`);

// ricavo i team con il punteggio migliore e ne stampo la lista
let winnerTeams = soccerTeams.filter( team => team.points == maxPoints );
printList(snack2ContainerDom, ...winnerTeams.map(team => `${team.name}`));

// Snack 3
/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/



// LISTA FUNZIONI

// funzione che restituisce un numero random comprenso tra min e max
function randomNumber (min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

// funzione che stampa sul DOM un 'p' che include diversi "contents"
function printP (domLink,...contents){
    const newP = document.createElement('p');
    newP.innerHTML = contents;
    domLink.append(newP);
}

// funzione che stampa sul DOM una lista che include diversi "listItems"
function printList (domLink,...listItems){
    const newList = document.createElement('ul');
    listItems.forEach(liContent => {
        newListItem = document.createElement('li');
        newListItem.innerHTML = liContent;
        newList.append(newListItem);
    });
    domLink.append(newList);
}