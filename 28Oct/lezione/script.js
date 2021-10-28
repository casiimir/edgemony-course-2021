// Funzioni
const getCoor = (event) => {
  const x = event.x;
  const y = event.y;
  console.log("X:", x, "Y:", y);
  return checkClick();
};

const removeWrapperList = () => {
  wrapper.removeEventListener("click", getCoor);
};

const checkClick = () => {
  counter++;
  if (counter === 10) {
    wrapper.removeEventListener("click", getCoor);
  }
};

// 'Inizio programma'

let counter = 0;
const wrapper = document.querySelector(".wrapper");
const firstBtn = document.querySelector(".btn");

wrapper.addEventListener("click", getCoor);

// TIMER
// setTimeout
setTimeout(() => {
  console.log("Eccomi!");
}, 3000);

const showMe = () => console.log("Eccomi!");

const afterSec = setTimeout(showMe, 3000);

clearTimeout(afterSec);

// setInterval
setInterval(() => {
  console.log("Eccomi!");
}, 3000);
