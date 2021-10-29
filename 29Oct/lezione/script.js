const discoDance = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  imageWrapper.style.display = "block";
  canvaImage.style.border = "6px solid #" + randomColor;
};

// Zona cattura-elementi
const body = document.body;
const buttonStart = document.querySelector(".button-start");
const imageWrapper = document.querySelector(".image");
const canvaImage = imageWrapper.firstElementChild;
const footer = document.querySelector(".footer");

// flusso exec.
buttonStart.addEventListener("click", discoDance);

footer.addEventListener("click", () => {
  buttonStart.removeEventListener("click", discoDance);
});

// // Rimuove il listening con keypress, al press del tasto Invio (ENTER)
// document.body.addEventListener(
//   "keypress",
//   (event) => {
//     if (event.key === "Enter") {
//       buttonStart.removeEventListener("click", discoDance);
//     }
//   },
//   { once: true }
// );

const wrapper = document.querySelector(".intestazione");
const h1Element = document.querySelector("h1");
const h1RenameBtn = document.querySelector(".button-name");
const h1RemoveBtn = document.querySelector(".button-remove");

// Possiamo anche selezionare il primo elemento children di wrapper
// wrapper.children[0]         identico a       h1Element

h1RemoveBtn.addEventListener(
  "click",
  () => {
    wrapper.removeChild(h1Element); // rimuove l'elemento h1
  },
  { once: true }
);

h1RenameBtn.addEventListener(
  "click",
  () => {
    h1Element.textContent = "Il DOM e la manipolazione degli elementi";
  },
  { once: true }
);

// Aggiungere un nuovo elemento in coda alla
// lista degli elementi di un det. elemento padre
const newParagraph = document.createElement("p");
newParagraph.className = "theNewParagraph";
newParagraph.setAttribute("name", "il nuovo arrivato");
newParagraph.textContent =
  "Ecco il nuovo paragrafo (sono stato creato dinamicamente)!";

wrapper.appendChild(newParagraph);
