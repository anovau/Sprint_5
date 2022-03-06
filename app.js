const url = "https://icanhazdadjoke.com/";
var JokeParrafo = document.getElementById("Joke");
var votacion = document.getElementById("errorVotacion");
var currentWeather = document.getElementById("CurrentWeather");
var weatherIcon = document.getElementById("weatherIcon");
var temperature = document.getElementById("temperature");

let chisteObj = {};
let currentJoke = {};
let score;
let reportAcudits = [];
let i = 0;

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
  // Si está todo ok: Votado y i es par
  else if (i % 2 == 0) {
    //saveJoke();
    getJoke();
    i++;
  }
  // Si está todo ok: Votado y i es inpar
  else if (i % 2 != 0) {
    getChuckNorrisJoke();
  }
}

async function getJoke() {
  currentJoke = {};
  const chiste = await fetch(url, {
    headers: {
      Accept: "application/JSON",
    },
  });
  currentJoke = await chiste.json();
  JokeParrafo.innerHTML = currentJoke.joke;
}

function saveJoke() {
  const d = new Date();
  let date = d.toISOString();
  currentJoke.date = date;
  reportAcudits.push(currentJoke);
  console.log(reportAcudits);
}

async function getWeather() {
  const responseWeather = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=d8ec460060f73b8a21776452facfeeec&lang=ca&units=metric"
  );
  let responseData = await responseWeather.json();
  let centigrade = Math.round(responseData.main.temp);
  let iconPng = responseData.weather[0].icon;

  weatherIcon.innerHTML =
    '<img src="http://openweathermap.org/img/wn/' + iconPng + '@2x.png"></img>';
  temperature.innerHTML = `${centigrade} °C`;
}
getWeather();

async function getChuckNorrisJoke() {
  currentJoke = {};
  const responseChuckNorris = await fetch(
    "https://api.chucknorris.io/jokes/random"
  );
  currentJoke = await responseChuckNorris.json();
  JokeParrafo.innerHTML = currentJoke.value;
}
