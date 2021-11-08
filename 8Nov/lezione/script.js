const solarSystem = [
  { name: "Sun", radius: 696340, surface: "star" },
  { name: "Mercury", radius: 2440, surface: "terrestrial" },
  { name: "Venus", radius: 6052, surface: "terrestrial" },
  { name: "Earth", radius: 6371, surface: "terrestrial" },
  { name: "Mars", radius: 3389, surface: "terrestrial" },
  { name: "Jupiter", radius: 69911, surface: "gas giant" },
  { name: "Saturn", radius: 58232, surface: "gas giant" },
  { name: "Uranus", radius: 25362, surface: "ice giant" },
  { name: "Neptune", radius: 24622, surface: "ice giant" },
];

const terrestrial = (planets) => planets.surface === "terrestrial";
const smallPlanets = (planets) => planets.radius <= 3000;
const stars = (planets) => planets.surface === "star";

const terrPlanets = solarSystem.filter(terrestrial);
const smallTerrPlanets = terrPlanets.filter(smallPlanets);
// const smallTerrPlanets = terrPlanets.filter((planets) => planets.radius <= 3000); <-- identico

const xyz = solarSystem.filter(terrestrial).filter(smallPlanets);

// console.log(smallTerrPlanets);
// console.log(xyz);

// ------------------------ Modale comincia da qui ------------------------
function hideModal() {
  modal.style.opacity = 0;

  setTimeout(() => {
    document.body.removeChild(modal);
  }, 350);
}

function redirectToGoogle() {
  window.location.href = "http://google.com";
}

const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");

acceptBtn.addEventListener("click", hideModal, { once: true });
denyBtn.addEventListener("click", redirectToGoogle, { once: true });

// ------------------------ Modale fine ------------------------

function ourMap(arr, callback) {
  const finalArray = [];

  for (num of arr) {
    finalArray.push(callback(num));
  }

  return finalArray;
}

const arr = [2, 4, 6, 8, 10];
// Il map equivale in tutto al nostro metodo 'ourMap'
arr.map((num) => num / 2); // Metodo
const resultOurMap = ourMap(arr, (num) => num / 2); // Funzione
console.log(resultOurMap);

// Esagerato!
// const allThePlanet = ourMap(solarSystem, (planet) => planet.name + " Planet");
// console.log(allThePlanet);

// PROTOTYPO ALLA MAP -- Perdeteci solo 15 minuti!!!!!
// Array.prototype.ourMap = function(callback) {
//   const finalArray = [];

//   for (num of this) {
//     finalArray.push(callback(num));
//   }

//   return finalArray;
// }

const monkeysEquipe = [
  { name: "John", aka: "lo spaventa passeri", surname: "Ross" },
  { name: "Ector", aka: "il corsaro", surname: "Mauss" },
  { name: "Franco", aka: "ciccio bello", surname: "La croix" },
  { name: "Mika", aka: "la regina del male", surname: "Peretti" },
  { name: "Lucy", aka: "il male", surname: "sconosciuto" },
];
