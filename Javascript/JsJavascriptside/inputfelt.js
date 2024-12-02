let brukernavn = document.getElementById("brukerenSittNavn") // gjør brukernavnet om til variabel
let knapp = document.getElementById("knapp")

knapp.addEventListener("click", sendInnBrukernavn)

function sendInnBrukernavn (){
    let brukernavn = brukerenSittNavn.value

    console.log(brukernavn);
    
}

