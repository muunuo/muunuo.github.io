let brukernavn = document.getElementById("brukerenSittNavn"); // gjør brukernavnet om til variabel
let trykkKnapp = document.getElementById("knapp"); // husk forskjellige navn på id og variabel
let siHei = document.getElementById("hei"); //(husk at let er det nye navnet, det i "er det gammle".)
let navn = document.getElementById("sierBrukerNavn"); 
let mellom = document.getElementById("mellomrom");

siHei.style.display = "none"; //ordet hei er gjømt når programet åpnes
mellom.style.display = "none";

trykkKnapp.addEventListener("click", sendInnBrukernavn); //"click" er innebyggd, 
//sier at når knappen trykkes skal den gjøre sendInnBrukernavn under.
function sendInnBrukernavn (){ //når send in brukernavn blir aktivert skal dette skje
    let brukernavn = brukerenSittNavn.value; //lagrer brukernavnet som ble skrvet inn i feltet

    console.log(brukernavn); //sier brukernavn i konsollen

    trykkKnapp.style.display = "none"; //gjømmer knappen
    brukerenSittNavn.style.display = "none"; //gjømmer svarfeltet
    siHei.style.display = "block"; //viser hei
    mellom.style.display = "block";

    document.getElementById("sierBrukerNavn").innerHTML = brukernavn; //Brukernavnet skrives på nettsiden
}

