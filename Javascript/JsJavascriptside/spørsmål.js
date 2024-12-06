

let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let trykkKnapp = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel


trykkKnapp.addEventListener("click", sendInnSvar); //"click" er innebyggd, 
//sier at når knappen trykkes skal den gjøre sendInnBrukernavn under.
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet

    console.log(svarSpørsmål1); //sier brukernavn i konsollen
}
