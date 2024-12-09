//sette opp alle viriabler
let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let sendInn = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel
let svarSpørsmål2 = document.getElementById("brukerSittSvarSpørsmål2");
let rett1 = document.getElementById("SierRettSvar1"); //hvis bruker svarer feil blir rett svar gitt
let rett2 =document.getElementById("SierRettSvar2"); //hvis bruker svarer feil blir rett svar gitt

//vise hva rette svaret er
SierRettSvar1.style.display="none"; //gjømmer rett svar frem til de trengs
SierRettSvar2.style.display="none"; //gjømmer rett svar frem til de trengs

//la data vite hva rett svar er 
svar1 = "CSS";
svar2 ="px";

//lage svar knapp
sendInn.addEventListener("click", sendInnSvar); //"click" er innebyggd,

//få svar knappen til å sende inn svar for begge spørsmålene
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet
    let svarSpørsmål2 = brukerSittSvarSpørsmål2.value;
    console.log(svarSpørsmål1); //sier brukernavn i konsollen
    console.log(svarSpørsmål2);

//få svarknappen til å forsvinne etter man trykker svar
    sendInn.style.display="none";

    //svaret kan ikke redigeres 
    document.getElementById("brukerSittSvarSpørsmål1").disabled= true;
    document.getElementById("brukerSittSvarSpørsmål2").disabled= true;


//la bruker vite hva rett svar er 
    if (svarSpørsmål1==svar1) {
        console.log("1rett");
    } else {
        console.log("1feil");
        SierRettSvar1.style.display="block";
    }

    if (svarSpørsmål2==svar2) {
        console.log("2rett");
    } else {
        console.log("2feil");
        SierRettSvar2.style.display="block";
    }

}

// //setter opp så input kan fjernes og svar vises 

//data sier om bruker svarte rett eller feil

//Ha en poengsum

