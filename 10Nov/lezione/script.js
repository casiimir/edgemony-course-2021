// TRY / CATCH / FINALLY syntax
// const userNum = prompt("Inserisci un numero minore di 10");
// try {
//   if (userNum >= 10) throw "il numero inserito è maggiore di 10";
//   if (userNum <= 0) throw "il numero inserito è minore 1";
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Hai fatto la tua scelta.");
// }

function sendCredentials(username) {
  userPage.firstElementChild.textContent = `Buongiorno ${username}`;
  // console.log(userPage.firstElementChild.textContent);
  // userPage.firstElementChild.textContent.replace("NOME", username);
}

function saveCredentials(user, pass) {
  window.localStorage.setItem("username", user);
  window.localStorage.setItem("password", pass);
}

function loadCredentials(key) {
  return window.localStorage.getItem(key);
}

const userPage = document.querySelector(".userPage");
const modalEl = document.querySelector(".modal");
const userInputEl = document.querySelector("#user");
const passInputEl = document.querySelector("#pass");
const btnSendEl = document.querySelector("#btnSend");

const user = {
  username: "",
  password: "",
};

// btnSendEl.addEventListener("click", (evt) => {
//   user.username = userInputEl.value;
//   user.password = passInputEl.value;

//   userPage.style.display = "block";
//   document.body.removeChild(modalEl);

//   // userPage.firstElementChild.textContent = "Test";
//   // userPage.firstElementChild.textContent.replace("NOME", user.username);
//   sendCredentials(user.username);
// });

// setTimeout(() => {
//   modalEl.style.transform = "translateY(0px)";
// }, 2000);

// -------------------------------
// Stessa ma con TRY e CATCH
// btnSendEl.addEventListener("click", (evt) => {
//   try {
//     user.username = userInputEl.value;
//     user.password = passInputEl.value;

//     if (user.username === "") {
//       throw `username vuoto`;
//     }

//     userPage.style.display = "block";
//     document.body.removeChild(modalEl);

//     sendCredentials(user.username);
//   } catch (err) {
//     if (err === "username vuoto") console.error("Errore - stringa vuota");
//     else console.warn("Questo è un errore nuovo");

//     // Alternativa migliore SWITCH!
//   } finally {
//     console.log("Finally!");
//   }
// });

// LOCAL STORAGE ----->
sendCredentials(loadCredentials("username"));

btnSendEl.addEventListener("click", (evt) => {
  user.username = userInputEl.value;
  user.password = passInputEl.value;

  saveCredentials(user.username, user.password);

  const userStorage = window.localStorage.getItem("username");

  sendCredentials(userStorage);
});
