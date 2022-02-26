const url = "https://icanhazdadjoke.com/";
var parrafo = document.querySelector("p");

async function mostrarChiste() {
  const chiste = await fetch(url, {
    headers: {
      Accept: "application/JSON",
    },
  });
  const chisteObj = await chiste.json();
  parrafo.innerHTML = chisteObj.joke;
}
