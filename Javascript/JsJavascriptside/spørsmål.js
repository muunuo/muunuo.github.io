

let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let sendInn = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel
let svarSpørsmål2 = document.getElementById("brukerSittSvarSpørsmål2");

//la data vite hva rett svar er 

let spørsmålx= document.querySelector("spørsmål")

svarx =["CSS","px"]

//lage svar knapp
sendInn.addEventListener("click", sendInnSvar); //"click" er innebyggd,

//få svar knappen til å sende inn svar for begge spørsmålene
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet
    let svarSpørsmål2 = brukerSittSvarSpørsmål2.value;
    console.log(svarSpørsmål1); //sier brukernavn i konsollen
    console.log(svarSpørsmål2)

//få mulighet til å svarknappen til å forsvinne etter man trykker svar
    sendInn.style.display = "none"

    //gjømme boksene man skriver i å skrive svaret bruker ga med <p>

    //la bruker vite hva rett svar er 
    for (let x = 0; x < spørsmålx.length; x++) {
        let svar = console.log (spørsmålx)[x];
        if (svar == svarx[x]) {
            console.log("rett")
        } else {
            console.log("feil")
        }
            
        }
        
    }

//data sier om bruker svarte rett eller feil

//Ha en poengsum

