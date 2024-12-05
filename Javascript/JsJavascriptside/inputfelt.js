let brukernavn = document.getElementById("brukerenSittNavn"); // gjør brukernavnet om til variabel
let knapp = document.getElementById("knapp");
let siHei = document.getElementById("hei");
let navn = document.getElementById("sierBrukerNavn");

siHei.style.display = "none";

knapp.addEventListener("click", sendInnBrukernavn); //"click" er innebyggd
//click sender inn brukernavn
function sendInnBrukernavn (){ //når send in brukernavn blir aktivert skal dette skje
    let brukernavn = brukerenSittNavn.value;

    console.log(brukernavn);
    knapp.style.display = "none";
    brukerenSittNavn.style.display = "none";
    siHei.style.display = "block";

    document.getElementById("sierBrukerNavn").innerHTML = brukernavn;
}

