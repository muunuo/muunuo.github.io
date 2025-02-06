// kryptering
let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!? ";
let alfabetLengde = alfabet.length;// sier hvor langt alfabete er
console.log("Alfabetet sin lengde: " + alfabetLengde);

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. 
// Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn) {  // henger veldig sammen med linje 26 (krypterBokstav)

    let posisjon = alfabet.indexOf(bokstavInn); // sier hva tall bokstaven er
    let posisjonNy =  posisjon + krypteringsnokkelInn;// sier at hvor den er skal plusses med krypteringskoden

    if ( posisjonNy >= alfabetLengde) {// denne koden gjør at hvis ? settes inn så får vi faktisk noe tilbake
        posisjonNy = posisjonNy - alfabetLengde
    }
    return alfabet[posisjonNy];
    

    // return alfabet[alfabet.indexOf(bokstavInn)+krypteringsnokkelInn]
    // Her skal magien skje! Skriv din eigen kode.
}

// console.log(alfabet.indexOf("0")); // Skal returnere 0
// console.log(alfabet.indexOf("a")); // Skal returnere 10

// console.log(krypterBokstav("?", 5)); // sier hva tall som settes inn og krypteringskoden



// // deKryptering

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. 
// Returnerer den nye bokstaven.
function deKrypterBokstav(bokstavInn, krypteringsnokkelInn) {

    let posisjon = alfabet.indexOf(bokstavInn); // sier hva tall bokstaven er
    let posisjonNy =  posisjon - krypteringsnokkelInn;// sier at hvor den er skal plusses med krypteringskoden

    if ( posisjonNy <0) {// denne koden gjør at hvis ? settes inn så får vi faktisk noe tilbake
        posisjonNy = posisjonNy + alfabetLengde;
    }
    return alfabet[posisjonNy];
}


// console.log(alfabet.indexOf("0")); // Skal returnere 0
// console.log(alfabet.indexOf("a")); // Skal returnere 10


//krypter en setning
let setning = "Angrip I Morgen";
let krypterSetning = "";

for (let bokstave of setning) {// for hver bokstav av setning
    krypterSetning = krypterSetning + krypterBokstav(bokstave, 1);
}

console.log(krypterSetning);


// dekrypter en setning
let hemmeligBeskjed = "Bohsjq0J0Npshfo";// harkodet inn beskjeden
let avsloring = "";

for (let bokstave of hemmeligBeskjed) {// for hver bokstav av setning
    avsloring = avsloring + deKrypterBokstav(bokstave, 1);
}

// console.log(avsloring);



// annen måte å skrive for løkken på
// for (let i = 0; i < setning.length; i++) { 
    
// }

let knapp = document.getElementById("svar")
knapp.addEventListener("click", svarKnapp)

function svarKnapp() {
    // let brukerMelding = document.getElementById("brukerSinMelding") 
    let nokkel = Number(brukerSinNokkel.value); // når det er et nummer må Number være forand
    let brukerMelding = brukerSinMelding.value;
    console.log(brukerMelding)
    console.log(nokkel)
    
let krypterBrukerSinSetning = "";

for (let bokstave of brukerMelding) {// for hver bokstav av setning
    krypterBrukerSinSetning = krypterBrukerSinSetning + krypterBokstav(bokstave, nokkel);
}
console.log(krypterBrukerSinSetning);

}