//sette opp alle viriabler
let svarSpørsmål1 = document.getElementById("brukerSittSvarSpørsmål1"); // gjør brukernavnet om til variabel
let sendInn = document.getElementById("sendInnAlleSvar"); // husk forskjellige navn på id og variabel
let svarSpørsmål2 = document.getElementById("brukerSittSvarSpørsmål2");
let rett1 = document.getElementById("SierRettSvar1"); //hvis bruker svarer feil blir rett svar gitt
let rett2 =document.getElementById("SierRettSvar2"); //hvis bruker svarer feil blir rett svar gitt

let sa1 = document.getElementById("svarAlternativ1")
let sa2 = document.getElementById("svarAlternativ2")

let poengsum = 0 


sendInn.addEventListener("click", sendInnSvar); //sender svar til bruker inn ("click" er innebyggd)
sa1.addEventListener("click", alternativ1); // lag to knapper
sa2.addEventListener("click", alternativ2); 

//vise hva rette svaret er
SierRettSvar1.style.display="none"; //gjømmer rett svar frem til de trengs
SierRettSvar2.style.display="none"; //gjømmer rett svar frem til de trengs

//la data vite hva rett svar er 
svar1 = "CSS";
svar2 ="px";


document.getElementById("poengsum").innerHTML =poengsum; //sier til bruker hva poeng de har.


valg1=false //når et valg er velgt blir det true
valg2=false
laBrukerSvare=true //når true kan bruker endre svaret

trykk()

function trykk() {
    if (valg1==false) {
        svarAlternativ1.style.backgroundColor = "#b469b3"
    } else {
        svarAlternativ1.style.backgroundColor = "#955894" //når knapp trykkes bli værende trykket
    }

    if (valg2==false) {
        svarAlternativ2.style.backgroundColor = "#b469b3"
    } else {
        svarAlternativ2.style.backgroundColor = "#955894"
    }
}

function alternativ1() {
    if (laBrukerSvare==true) { //bruker kan endre svar
        if (valg1==false) {
            valg1=true
            valg2=false
        } else {
            valg1=false
        }
        
        trykk()
    }
}

function alternativ2() {
    if (laBrukerSvare==true) {
        if (valg2==false) {
            valg2=true
            valg1=false //hvis knapp 2 trykkes når knapp 1 er trykket resettes knapp1 og knapp 2 blir værende trykket
        } else {
            valg2=false
        }
        
        trykk()
    }
}


//få svar knappen til å sende inn svar for begge spørsmålene
function sendInnSvar (){ //når send in brukernavn blir aktivert skal dette skje
    let svarSpørsmål1 = brukerSittSvarSpørsmål1.value; //lagrer brukernavnet som ble skrvet inn i feltet
    let svarSpørsmål2 = brukerSittSvarSpørsmål2.value;
    console.log(svarSpørsmål1); //sier brukernavn i konsollen
    console.log(svarSpørsmål2);

    laBrukerSvare=false; //bruker kan ikke lengre endre svaret

//få svarknappen til å forsvinne etter man trykker svar
    sendInn.style.display="none";

    //svaret kan ikke redigeres 
    document.getElementById("brukerSittSvarSpørsmål1").disabled= true;
    document.getElementById("brukerSittSvarSpørsmål2").disabled= true;


//la bruker vite hva rett svar er 
    if (svarSpørsmål1==svar1) {
        console.log("1rett");
        poengsum=poengsum+1
    } else {
        console.log("1feil");
        SierRettSvar1.style.display="block";
    }

    if (svarSpørsmål2==svar2) {
        console.log("2rett");
        poengsum=poengsum+1
    } else {
        console.log("2feil");
        SierRettSvar2.style.display="block";
    }

    if (valg1==true) {
        poengsum=poengsum+1//ene er rett å trykke, andre feil
    } else if(valg2==true) {
        poengsum=poengsum+0//når svar leveres gi poeng hvis riktig knapp er trykket 
    }

    console.log(poengsum)
    document.getElementById("poengsum").innerHTML =poengsum; //sier til bruker hva poeng de har.

    brukerSittSvarSpørsmål2.style.float="left"//riktig svar ligger ved sidnavs brukers svar
    brukerSittSvarSpørsmål1.style.float="left"


}









// //setter opp så input kan fjernes og svar vises 

//data sier om bruker svarte rett eller feil

//Ha en poengsum


