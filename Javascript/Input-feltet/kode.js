let htmlBrukernavn = document.getElementById("brukernavn")
let htmlPassord = document.getElementById("passord")
let htmlFarge = document.getElementById("farge")

let knappSend= document.getElementById("knappSend") //setter opp at variabelen

knappSend.addEventListener ("click", sendInn) //det de svarte sendes inn til meg 

function sendInn(){
    console.log("knappen ble trykket") //så du vet du gjorde det riktig 

    let brukernavn = htmlBrukernavn.value; // verdien (value) er brukernavn, passord og fargen 
    let passord = htmlPassord.value;
    let farge = htmlFarge.value;

    console.log("Brukernavn: " + brukernavn); // skriver ut ordet brukernavn og brukernavnet som vi hentet over
    console.log("Passord: " +passord);
    console.log("Farge" + farge);
}