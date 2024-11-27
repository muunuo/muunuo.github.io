console.log("javascript tilkoblett");
// let tid = new Date();
// document.querySelector("#klokke").innerText = tid; 



function klokken(){ // det her inni skjer hvert sekund
    
    let noverendetid = new Date(); //Hent tid fra internette sin noværende tid
    // henter tid,min timer
    let time = noverendetid.getHours(); // sepererer tiden hentet inn i timer
    let min = noverendetid.getMinutes(); //minutter
    let sek = noverendetid.getSeconds(); // og sekunder så vi kan vise de hver for oss

    time = time < 10 ? '0' + time : time; // time skal skrives som hva time det er, skrevet som to tall (enerplass og tierplass)
    min = min < 10 ? '0' + min : min; // hvis det ikke er to tall (reprensenter av ?) skriv en 0
    sek = sek < 10 ? '0' + sek : sek; // og siste biten med sek/min/time brukes for å vise de.

    document.getElementById("klokken").innerText = "Klokken er " + time + ":" + min + ":" + sek; 
    //så det er litt tekst, og med å bruke elementet klokke så kan jeg endre posisjonen på klokken uten å endre scriptet.
}

setInterval(klokken,1000); // hvert tusene millisikund så opptateres klokken
