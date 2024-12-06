

let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let sendInn = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel
let svarSpørsmål2 = document.getElementById("brukerSittSvarSpørsmål2");


sendInn.addEventListener("click", sendInnSvar); //"click" er innebyggd, 
//sier at når knappen trykkes skal den gjøre sendInnBrukernavn under.
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet
    let svarSpørsmål2 = brukerSittSvarSpørsmål2.value;
    console.log(svarSpørsmål1); //sier brukernavn i konsollen
    console.log(svarSpørsmål2)
}
