let brukernavn = document.getElementById("brukerenSittNavn") // gjør brukernavnet om til variabel
let knapp = document.getElementById("knapp")

knapp.addEventListener("click", sendInnBrukernavn)

function sendInnBrukernavn (){
    console.log("knapp trykkes")
    let brukernavn = brukerenSittNavn.value

    console.log(brukernavn);
    
}
