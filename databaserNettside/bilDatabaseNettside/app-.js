async function henteBiler() {
    const res = await fetch('http://localhost:3000/biler'); //de henter og gjør om en vits fra nettsiden til en variabel 
    const data = await res.json(); // konventerer vitsen til {} 
    
    console.log(data);
    console.log(data[1].merke);

    for (let bil of data){
        console.log(bil.merke);
        let listeElement = document.createElement('li');
        listeElement.innerHTML = bil.registreringsNr + bil.merke;
        // listeElement.innerHTML = bil.merke;
        document.querySelector("#listeBiler").appendChild(listeElement);

    }

    app.use(express.static('public'));
    // // Tømmer sida for gamle vitsar
    // document.querySelector("#vits").innerHTML = "";

    // // Opprettar ein ny vits i ein paragraf
    // let vits = document.createElement("p");
    // vits.innerText = data.value; // viser vitsen på nettsiden
    // document.querySelector("#vits").appendChild(vits);
    
    // // Legg til eit bilete av Chuck Norris
    // let bilde = document.createElement("img");
    // bilde.src = data.icon_url;
    // document.querySelector("#vits").appendChild(bilde);
}

henteBiler(); // Slik at me får ein vits med ein gong me lastar sida