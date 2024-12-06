
// // enkel quiz
// let listeSpørsmål=["Hvem er støre av 1 og 2?","Hva er størst 10 eller 14?"]
// let listeSvar=["2","14"]
// //x er en variabel, samme som i. Den endrer seg så har ikke et bestemt navn.
// // spmNr er spørsmålnummer
// for(let x = 0; x< listeSpørsmål.length; x++){
//     let svar = prompt ("Spørsmål: " + listeSpørsmål[x]);
//     console.log("Spørsmål: " + listeSpørsmål[x]);
//     if (svar == listeSvar[x]) {
//         console.log ("Det er riktig, bra jobbet!");
//     } else {
//         console.log ("Det er feil!")
//         console.log("Riktig Svar: " + listeSvar[x]);
//     }
// }






let førsteSpørsmål= document.getElementById("spørsmål1")
let andreSpørsmål= document.getElementById("spørsmål2")
let sendInnSvar= document.getElementById("sendInnAlleSvar")


//sett opp måte å sende inn svar på begge spørsmål samtidig
sendInnSvar.addEventListener("click", brukerSineSvar); 

function brukerSineSvar (){ 
    let førsteSpørsmål = spørsmål1.value; 
    let andreSpørsmål = spørsmål2.value

    sendInnAlleSvar.style.display = "none"
    
    console.log(førsteSpørsmål)
    console.log(andreSpørsmål)
}
//sett opp så muligheten til å svare forsvinner etter man trykker svar

//sett opp så js vet at spørsmålx er et spørsmål

//sett opp et riktig svar til spørsmålene

//gjør så dataen sier om svaret var rett eller gale

//skriv ut til bruker om svar var rett eller gale

//sett opp så en poengsum vises 