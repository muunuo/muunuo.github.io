let brukernavn = document.getElementById("brukerenSittNavn"); // gjør brukernavnet om til variabel
let trykkKnapp = document.getElementById("knapp"); // husk forskjellige navn på id og variabel
let siHei = document.getElementById("hei"); //(husk at let er det nye navnet, det i "er det gammle".)
let navn = document.getElementById("sierBrukerNavn"); 

siHei.style.display = "none"; //ordet hei er gjømt når programet åpnes

trykkKnapp.addEventListener("click", sendInnBrukernavn); //"click" er innebyggd, 
//gjør at når knapp trykkes blir navnet gitt variabelen sendInnBrukernavn
function sendInnBrukernavn (){ //når send in brukernavn blir aktivert skal dette skje
    let brukernavn = brukerenSittNavn.value; //

    console.log(brukernavn); //sier brukernavn i konsollen

    trykkKnapp.style.display = "none"; //gjømmer knappen
    brukerenSittNavn.style.display = "none"; //gjømmer svarfeltet
    siHei.style.display = "block"; //viser hei

    document.getElementById("sierBrukerNavn").innerHTML = brukernavn; //Brukernavnet skrives på nettsiden
}

