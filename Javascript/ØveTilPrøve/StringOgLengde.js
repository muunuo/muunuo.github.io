let navn1 = document.getElementById("BrukerVelgerNavn1");
let navn2 = document.getElementById("BrukerVelgerNavn2");

let sendInnSvar = document.getElementById("knapp"); //Gir knapp en variabel 

knapp.addEventListener("click", sendInn); //når knappen trykkes vil brukerens svar sendes inn til meg

function sendInn() {
    console.log("det fungerer");

    let navn11 = navn1.value;
    let navn22 = navn2.value;

    document.getElementById("Svaret").innerText = "navn11" + "navn22" //text er for kun tekst, html er hvis du skal ha html inni tekstboksen(eks bilde)

}