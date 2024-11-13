// for løkke (tydelig hva poenget er (?))
//skrevet manuelt 

// variabel i starter på 0 og er mindre en 10 og skal endres med 1 
//husk ; inni () mellom punktene utenom på siste 

for ( let i = 0; i < 10; i = i + 1 ){ //i++ eller i+= 2 eller i=i+1 kan alle brukes til å si hvor mye det øker
    //hva skal skje står inni her
    console.log("tallet" + i); // tallet er tekst, i gir selve tallet
}



// enkel quiz
let listeSpørsmål=["Hvem er støre av 1 og 2?","Hva er størst 10 eller 14?"]
let listeSvar=["2","14"]
//x er en variabel, samme som i. Den endrer seg så har ikke et bestemt navn.
// spmNr er spørsmålnummer
for(let x = 0; x< listeSpørsmål.length; x++){
    let svar = prompt ("Spørsmål: " + listeSpørsmål[x]);
    console.log("Spørsmål: " + listeSpørsmål[x]);
    if (svar == listeSvar[x]) {
        console.log ("Det er riktig, bra jobbet!");
    } else {
        console.log ("Det er feil!")
        console.log("Riktig Svar: " + listeSvar[x]);
    }

}
// = ting er samme 
// == er det likt
// === kjekker om datatype er riktig 
//løkke er greit for å lage lister 

// while løkke