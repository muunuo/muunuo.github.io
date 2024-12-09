//sette opp alle viriabler
let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let sendInn = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel
let svarSpørsmål2 = document.getElementById("brukerSittSvarSpørsmål2");
let rett1 = document.getElementById("rettSvar1")
let rett2 =document.getElementById("rettSvar2")

//vise hva rette svaret er
rettSvar1.style.display="none"
rettSvar2.style.display="none"

//la data vite hva rett svar er 
svar1 = "CSS"
svar2 ="px"

//lage svar knapp
sendInn.addEventListener("click", sendInnSvar); //"click" er innebyggd,

//få svar knappen til å sende inn svar for begge spørsmålene
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet
    let svarSpørsmål2 = brukerSittSvarSpørsmål2.value;
    console.log(svarSpørsmål1); //sier brukernavn i konsollen
    console.log(svarSpørsmål2)

//få svarknappen til å forsvinne etter man trykker svar
    sendInn.style.display="none"

    //svaret kan ikke redigeres 
    document.getElementById("brukerSittSvarSpørsmål1").disabled= true;
    document.getElementById("brukerSittSvarSpørsmål2").disabled= true;

//hva skjer når du svarer
    if (svarSpørsmål1==svar1) {
        console.log("1rett")
    } else {
        console.log("1feil")
        rettSvar1.style.display="block"
    }

    if (svarSpørsmål2==svar2) {
        console.log("2rett")
    } else {
        console.log("2feil")
        rettSvar2.style.display="block"
    }

}

// //setter opp så input kan fjernes og svar vises 
//gjømme boksene man skriver i å skrive svaret bruker ga med <p>
//la bruker vite hva rett svar er 
//data sier om bruker svarte rett eller feil

//Ha en poengsum

