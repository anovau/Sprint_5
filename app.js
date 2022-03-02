const url = "https://icanhazdadjoke.com/";
var parrafo = document.querySelector("p");
var votacion = document.getElementById("errorVotacion");

let chisteObj = {};
let currentJoke = {};
let score;
let reportAcudits = [];

function votar(nota) {
  currentJoke.score = nota;
  votacion.style.display = "none";
  saveJoke();
}

function handleGetJoke() {
  // Primera vez que pulsa
  if (!currentJoke.joke) {
    getJoke();
  }
  // Si ho ha votado
  else if (!currentJoke.score) {
    votacion.style.display = "block";
  }
  // Si está todo ok: Votado
  else {
    //saveJoke();
    getJoke();
  }
}

async function getJoke() {
  currentJoke = {};
  const chiste = await fetch(url, {
    headers: {
      Accept: "application/JSON",
    },
  });
  currentJoke.joke = await chiste.json();
  parrafo.innerHTML = currentJoke.joke.joke;
}

function saveJoke() {
  const d = new Date();
  let fecha = d.toISOString();
  currentJoke.date = fecha;
  reportAcudits.push(currentJoke);
  console.log(reportAcudits);
}
