// window.addEventListener("DOMContentLoaded", () =>
//   console.log("Pagina caricata!")
// );

// FIRST BUTTON
const myFunction = () => console.log("Cliccato!");

// Pesca tutti gli elementi che rispondono alla classe 'secondBtn'
// const secondBtn = document.getElementsByClassName("secondBtn");
// console.log(secondBtn);

// const allTheButtons = document.querySelectorAll("button");
// console.log(allTheButtons[1]);

// SECOND BUTTON
const secondBtn = document.querySelector("#secondBtn");
secondBtn.onclick = () => console.log("Cliccato!");

// THIRD BUTTON
const thirdBtn = document.querySelector("#thirdBtn");
// thirdBtn.className = "button";  // Assegna la classe e la rimpiazza - Proprietà
// thirdBtn.classList = "button"; // Assegna la classe alla lista (delle classi)

thirdBtn.addEventListener(
  "click",
  () => {
    // thirdBtn.className = "button"; // Assegna la classe
    thirdBtn.classList.add("button");
    console.log(thirdBtn);
  },
  { once: true } // Scatena l'evento una volta sola
);

const allTheButtons = document.querySelectorAll("button");

// SELEZIONE MULTIPLA DI ELEMENTI
// for (button of allTheButtons) {
//   button.addEventListener("mouseover", () => console.log("Hover!"));
// }

// PREMENDO IL TASTO INVIO
document.addEventListener("keypress", (event) => {
  const wrapper = document.querySelector(".headingWrapper");

  if (event.key === "Enter") {
    wrapper.style.backgroundColor = "red";
  }
});

// Funzione Toggle
const darkModeBtn = document.querySelector(".enableDarkMode");
darkModeBtn.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");
  }
  // { once: true }
);

// Continuiamo domani con il removeEventListener e introdurremo il concetto parent-children...
// const printEventName = () => console.log("Hai premuto un tasto");
// document.addEventListener("keypress", printEventName());
// document.removeEventListener("keypress", printEventName());
