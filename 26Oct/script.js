// FUNZIONI COMPLESSE
// function sum(numOne, numTwo) {
//   const sumTot = numOne + numTwo;
//   return sumTot;
// }

// const sum = function (numOne, numTwo) {
//   const sumTot = numOne + numTwo;
//   return sumTot;
// };

// Arrow function
// const sum = (numOne, numTwo) => numOne + numTwo;

// const sum = (numOne, numTwo) => {
//   console.log("Salve Casi");
//   return numOne + numTwo;
// };

// const sortingArray = (array) => array.sort();
// // sortingArray(fruits)

// Spread operator
// const fruits = ["kiwi", "apple", "orange", "pear"];

// function printFruits(...array) {
//   console.log(array);
// }

// printFruits(fruits);
// book.sort((a, b) => a.fname > b.fname ? 1 : -1);

/* Creare una calcolatrice che permetta all'utente di selezionare
   una operazione e dati piu di un numero (altrimenti restituisce lo stesso)
   ritorni la corrispettiva operazione.

   // Concetto di callback => guardate al parametro 'operation'
   // Contectto di spread operator => guardate ai tre puntini

   PSEUDOCODICE di esempio
   1. L'utente sceglie l'operazione e i numeri
   2. Se il numero scelto:
      - è uno solo, ritorna lo stesso numero
      - è inesistente, ritorna un errore
      - se più di uno, ne ritorna l'operazione
   3. Stampa a video il risultato dell'operazione
*/

// function calculator(numbers) {
//   const operationChoice = prompt("Scegli un'operazione");
//   let totOperation = 0;

//   if (operationChoice === "+" || operationChoice === "somma") {
//     totOperation = sum(...numbers);
//   }

//   return totOperation;
// }

const sum = (numOne, numTwo) => numOne + numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

function calculator(operation, numbers) {
  let totOperation = 0;
  totOperation = operation(...numbers);
  return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}

if (operationChoice === "somma") {
  calculator(sum, parsedNumbers);
}
// ...
// if (operationChoice === "mult") {
//   calculator(mult, numbers);
// }
