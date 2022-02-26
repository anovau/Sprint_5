const url = "https://icanhazdadjoke.com/"

async function mostrarChiste(){

    const chiste = await fetch(url, {    
        headers: {                             
            'Accept': 'application/JSON' 
        }
    });
    const chisteObj = await chiste.json();
    console.log(chisteObj)

}
