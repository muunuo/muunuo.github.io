let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";
let alfabetLengde = alfabet.length;// sier hvor langt alfabete er
console.log("Alfabetet sin lengde: " + alfabetLengde);



// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. 
// Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn) {  // henger veldig sammen med linje 30 (krypterBokstav)

    let posisjon = alfabet.indexOf(bokstavInn); // sier hva tall bokstaven er
    let posisjonNy =  posisjon + krypteringsnokkelInn;// sier at hvor den er skal plusses med krypteringskoden

    if ( posisjonNy >= alfabetLengde) {// denne koden gjør at hvis ? settes inn så får vi faktisk noe tilbake
        posisjonNy = posisjonNy - alfabetLengde
    }
    return alfabet[posisjonNy];
    

    // return alfabet[alfabet.indexOf(bokstavInn)+krypteringsnokkelInn]
    // Her skal magien skje! Skriv din eigen kode.
}




console.log(alfabet.indexOf("0")); // Skal returnere 0
console.log(alfabet.indexOf("a")); // Skal returnere 10

console.log(krypterBokstav("?", 5)); // sier hva tall som settes inn og krypteringskoden

