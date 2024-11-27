let img_stein = document.getElementById("stein");
let img_saks = document.getElementById("saks");
let img_papir = document.getElementById("papir");

let img_stein2 = document.getElementById("stein2");
let img_saks2 = document.getElementById("saks2");
let img_papir2 = document.getElementById("papir2");

let vant = document.getElementById("vant");
let tap = document.getElementById("tap");
let uavgjordt = document.getElementById("uavgjordt");

vant.style.display = "none";
tap.style.display = "none";
uavgjordt.style.display = "none";

img_stein2.style.display = "none";
img_saks2.style.display = "none";
img_papir2.style.display = "none";

// bildene gjøres om til knapper
img_stein.addEventListener("click", velgStein);
img_saks.addEventListener("click", velgSaks);
img_papir.addEventListener("click", velgPapir);

let brukerValg = "";



// her sier vi hva som skal skje når vi trykker på stein, saks eller papir
function velgStein() {
    console.log ("Du valgte stein"); // skrives i consolle
    // alert("Du valgte Stein!"); // skrives til bruker som popup

    brukerValg="stein";

    // skal fjerne de andre bildene som ikke ble valgt
    img_papir.style.display = "none";
    img_saks.style.display = "none";

    dataenSittValg(); // når brukeren har valgt, kjøres dataen sitt valg koden
}

function velgSaks() {
    console.log ("Du valgte saks");
    // alert("Du valgte saks!");

    brukerValg="saks";

    img_papir.style.display = "none";
    img_stein.style.display = "none";

    dataenSittValg();
}

function velgPapir() {
    console.log ("Du valgte papir");
    // alert("Du valgte papir!");

    brukerValg="papir";

    img_stein.style.display = "none"; //none er for å gjømme bilde 
    img_saks.style.display = "none";

    dataenSittValg();
}

// husk å si når koden skal kjøres //dataenSittValg();

function dataenSittValg(){ // her velger dataen stein saks papir
    let dataValg = Math.floor(Math.random() * 3 + 1); // dataen velger et tilfeldig tall mellom 1-3, floor gjør at den runder av for å unngå desimaler
    console.log(dataValg); // så vi kan se hva tall blir valgt

    if (dataValg == 1) { // dobbel == spør OM dataValg = 1, enkel = SIER at dataValg er 1
        // alert("Jeg valgte stein"); // sier til bruker hva data valgte
        console.log ("jeg valgte 1"); // sier til oss hva data valgte
        img_stein2.style.display = "block";
    }
    if (dataValg == 2) { // vi sier at hvis det tilfeldige tallet er to, så valgte dataen stein.
        console.log ("jeg valgte 2"); //vi sier i konsollen hva data valgte
        img_saks2.style.display = "block"; //
    }
    if (dataValg == 3) {
        // alert("jeg valgte papir");
        console.log ("jeg valgte 3");
        img_papir2.style.display = "block";
    }

    console.log("Brukeren valgte: " + brukerValg);

    if (brukerValg == "stein" && dataValg == 1) {
        uavgjordt.style.display = "block"; // block viser element
        return;
    }

    if (brukerValg == "saks" && dataValg == 2) {
        uavgjordt.style.display = "block";
        return;
    }

    if (brukerValg == "papir" && dataValg == 3) {
        uavgjordt.style.display = "block";
        return;
    }

    if (brukerValg == "stein" && dataValg == 3) {
        tap.style.display = "block";
        return;
    }

    if (brukerValg == "saks" && dataValg == 1) {
        tap.style.display = "block";
        return;
    }

    if (brukerValg == "papir" && dataValg == 2) {
        tap.style.display = "block";
        return;
    }  

    if (brukerValg == "stein" && dataValg == 2) {
        vant.style.display = "block";
        return;
    }  

    if (brukerValg == "saks" && dataValg == 3) {
        vant.style.display = "block";
        return;
    }  

    if (brukerValg == "papir" && dataValg == 1) {
        vant.style.display = "block";
        return;
    }  

}



let startny = document.getElementById("startny");

startny.addEventListener('click', begynnenytt);

function begynnenytt() {
    img_stein.style.display = "block"; //får bildene spilleren kan velge mellom til å vise seg igjen
    img_saks.style.display = "block";
    img_papir.style.display = "block";

    uavgjordt.style.display = "none";
    tap.style.display = "none";
    vant.style.display = "none";

    img_stein2.style.display = "none";
    img_saks2.style.display = "none";
    img_papir2.style.display = "none";

}

// let img_reser = document.getElementById ("reset");
// img_reser.addEventListener("click", reser);

// // if ("click", reser) 
// if (myFunction) {
//     document.getElementById("SSPKode").reset
// }
// // function myFunction(){
// //     document.getElementById("SSPKode").reset();
// // }
