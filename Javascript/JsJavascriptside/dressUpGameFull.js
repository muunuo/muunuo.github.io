//NB! <3 betyr at det er et notat om en gammel kode lagt 
//seinere/forklarer hva koden skulle gjøre/hvorfor jeg ble kvitt den

//sette opp variabler
//variabler antrekk -->
let KnappVelgAntrekk1 = document.getElementById("litenRosaKjole"); 
let KnappVelgAntrekk2 = document.getElementById("litenAntrekk");
let KnappVelgAntrekk3 = document.getElementById("knappFestKler");

let antrekk1 = document.getElementById("rosaKjole");
let antrekk2 = document.getElementById("antrekk");
let antrekk3 = document.getElementById("festKler");
//variabler antrekk <--

//variabler har -->
let KnappVelgHar1 = document.getElementById("knappHar1");
let KnappVelgHar2 = document.getElementById("knappHar2");
let KnappVelgHar3 = document.getElementById("knappHar3"); 

let har1 = document.getElementById("dokkeHar1");
let har2 = document.getElementById("dokkeHar2");
let har3 = document.getElementById("dokkeHar3");
//variabler har <--

//variabler poeng -->
let skole = document.getElementById("skoleHendelse");//variabler for hendelsene
let jobb = document.getElementById("jobbHendelse");
let fest = document.getElementById("festHendelse");
let ferdig = document.getElementById("brukerErFerdig");

let leverSvar = document.getElementById("leverInnSvar");//bruker leverer svar

let brukerPoeng = document.getElementById("brukerSerPoeng");//hvor mye poeng bruker får

let poeng = 0; //poeng starter på 0
//variabler poeng <--

//true/false-->
let antrekk1TogF=false; //2. Det begynner som av
let antrekk2TogF=false;
let antrekk3TogF=false;

let har1TogF = false;//Alle begynner som av (false) av 
let har2TogF = false;
let har3TogF = false; 

let skolehendelse = true; //enete hendelsen som begynner som på
let jobbhendelse = false; //begynnerf som av
let festhendelse = false; //--||--
let begynnNy = false;//koblett til ferdig(reset)
//true/false <--

document.getElementById("brukerSerPoeng").innerHTML =poeng; //sier til bruker hva poeng de har.

hendelse()//må se hva å gjøre med tru false veriene over

//knapper-->
KnappVelgAntrekk1.addEventListener("click", velgAntrekk1);;//1. Lag en knapp
KnappVelgAntrekk2.addEventListener("click", velgAntrekk2);
KnappVelgAntrekk3.addEventListener("click", velgAntrekk3);

KnappVelgHar1.addEventListener("click", velgHar1); //sette opp bilder til knapper
KnappVelgHar2.addEventListener("click", velgHar2);
KnappVelgHar3.addEventListener("click", velgHar3);
leverSvar.addEventListener("click", leverSvarKnapp); //2,2. Sett opp så knappen bytter fra hendelse 1 til 2 og 2 til 3
//knapper <--

// NB!! ChatGPD ga meg denne koden. Min orginale kode for poengsystemet ligger lengre nede
const poengTabell = {
    skole: { // Poeng for skolehendelsen
        har1: 2,
        har2: 1,
        har3: 1,
        antrekk1: 2,
        antrekk2: 0,
        antrekk3: 1,

    },
    jobb: { // Poeng for jobbhendelsen
        har1: 0,
        har2: 2,
        har3: 0,
        antrekk1: 1,
        antrekk2: 2,
        antrekk3: 0,

    },
    fest: { // Poeng for festhendelsen
        har1: 1,
        har2: 1,
        har3: 2,
        antrekk1: 0,
        antrekk2: 0,
        antrekk3: 2,

    }
};

function beregnPoeng(hendelse) {
    // Finn hvilket har som er valgt
    const valgthar = har1TogF ? "har1" : har2TogF ? "har2" : har3TogF ? "har3" : null;

    // Finn hvilket antrekk som er valgt
    const valgtAntrekk = antrekk1TogF ? "antrekk1" : antrekk2TogF ? "antrekk2" : antrekk3TogF ? "antrekk3" : null;


    // Legg til poeng for valgt har og antrekk
    poeng += poengTabell[hendelse][valgthar] || 0;
    poeng += poengTabell[hendelse][valgtAntrekk] || 0;

    console.log(`Poeng for ${hendelse}: ${poeng}`);
    document.getElementById("brukerSerPoeng").innerHTML = poeng; // Oppdater visningen
}

// herfra er det igjen min egen kode


//function-->
function hendelse() { //hva hendelse man kler dukken til
    if (skolehendelse==false) { //hendelse blir fortalt til bruker
        skoleHendelse.style.display="none";
    } else {
        skoleHendelse.style.display="block";
    }

    if (jobbhendelse==false) {
        jobbHendelse.style.display="none";
    } else {
        jobbHendelse.style.display="block";
    }

    if (festhendelse==false) {
        festHendelse.style.display="none";
    } else {
        festHendelse.style.display="block";
    }

    if (begynnNy==false){
        brukerErFerdig.style.display="none"
    } else{
        brukerErFerdig.style.display="block"
    }
}


function leverSvarKnapp() { //må ikke runnes, runner når trykket
console.log("hei")
    if (skolehendelse==true) { //hvis bruker er på skolehendelse byttes det til jobb hendelse
        beregnPoeng("skole"); //akkurat denne ene linjen er fra chatGPT
        skolehendelse=false
        jobbhendelse=true

    } else if(jobbhendelse==true) {
        beregnPoeng("jobb");
        jobbhendelse=false;
        festhendelse=true;

    } else if(festhendelse==true){
        beregnPoeng("fest");
        festhendelse=false;
        begynnNy = true;

    } else if(begynnNy==true){ //tom skjerm skjer fordi denne. Hvis du vil endre det sett det så eu går til skole hendelse
        begynnNy=false //skal brukes for å vise poeng på slutten.
        skolehendelse=true
        poeng = 0;
    }

    document.getElementById("brukerSerPoeng").innerHTML =poeng; //no øker poeng hver gang bruker leverer svar
    HTogF();
    hendelse();
    beregnPoeng(); //husk denne!
}

function TogF() { //her inne skal vi si hva som skjer når noe er sant eller usant.

    if (antrekk1TogF==false) { //om antrekket er av
        antrekk1.style.display="none"; //skal det ikke vises
        } else { //men hvis det ikke er av (altså på)
            antrekk1.style.display="block"; //skal det vises
            
        }

    if (antrekk2TogF==false) { 
        antrekk2.style.display="none";
        } else {
            antrekk2.style.display="block";
        }

    if (antrekk3TogF==false) { 
        antrekk3.style.display="none";
        } else {
            antrekk3.style.display="block";
        }

}



function HTogF() { //hva skjer når det er sant/usant
    if (har1TogF==false) { //når antrekket er av-
        har1.style.display = "none"; //-skal det ikke vises og
        // godR.pause(); //lyd skal ikke spilles
        } else { //men hvis det ikke er på-
            har1.style.display = "block"; //-skal bilde vises og-
            // godR.play(); //1,2. lyd spilles av når har velges 
        }

        if (har2TogF==false) { //fungerer likt som den over
            har2.style.display = "none";
            } else {
                har2.style.display = "block";
            }

            if (har3TogF==false) { //fungerer likt som de over
                har3.style.display = "none";
                } else {
                    har3.style.display = "block";
                }
}

HTogF();//function HTogF blir kjørt her 


function velgHar1() { //når bilde1 trykkes-
    //løp funksjonen så ting faktisk skjer.
    if (har1TogF==false) { //hvis bilde er av
        har1TogF=true; //skrus de på
        har2TogF=false; //og de andre går av
        har3TogF=false; //--||--
        
    } else {//hvis det allerede er på 
        har1TogF=false; //skrus det av
    }
HTogF(); //kjør funksjon
}

function velgHar2() {//samme som over

    if (har2TogF==false) {
        har2TogF=true;
        har1TogF=false;
        har3TogF=false;
    } else {
        har2TogF=false;
        
    }
    HTogF();//husk denne!!!!, ellers skjer det ingenting
}

function velgHar3() {//samme som over

    if (har3TogF==false) {
        har3TogF=true;
        har1TogF=false;
        har2TogF=false;
    } else {
        har3TogF=false;
        
    }
    HTogF();//husk denne!!!!, ellers skjer det ingenting
}

//antrekk-->

TogF()//function TogF blir kjørt her 


function velgAntrekk1() {
console.log("antrekk1")
    //løp funksjonen så ting faktisk skjer.
    if (antrekk1TogF==false) {//3. Når trykket blir den til på
        antrekk1TogF=true;
        antrekk2TogF=false;
        antrekk3TogF=false;
        
    } else {//4.når trykket igjen blir den til av
        antrekk1TogF=false;
    }
TogF();
}

function velgAntrekk2() {
    console.log("antrekk2")
    if (antrekk2TogF==false) {
        antrekk2TogF=true;
        antrekk1TogF=false;
        antrekk3TogF=false;
    } else {
        antrekk2TogF=false;
        
    }
    TogF();//husk denne!!!!, ellers skjer det ingenting
}

function velgAntrekk3() {
    console.log("antrekk3")
    if (antrekk3TogF==false) {
        antrekk3TogF=true;
        antrekk1TogF=false;
        antrekk2TogF=false;
    } else {
        antrekk3TogF=false;
        
    }
    TogF();//husk denne!!!!, ellers skjer det ingenting
}
//antrekk <--



//notater/planer-->

//x 1,3. Hvert har gir poeng (basert på lyd)
//1,4. Mengden poeng du har vises 
//1,4. Klær gir poeng
//x 1,4,1. Poeng blir kun gitt når antrekk "leverses"
//x 1,4,2. Du kan ikke få flere poeng med å tryke flere ganger på samme ting
//x 1,4,3. få hvert har til å være en viss poengs
//1,6. poeng per kategori og sammensatt visesum i en viss situasjon
//x 1,7. Bruker blir gitt en anleding person skal kle seg til
//1,8. sett opp så anledning tifleigvis bestemmes fr 2-3 mulige

//x 2,1. Fjern tilfeldigheten med hendelsne 

//x 2,3. kan no bruke hendelsenavn i stede for tall.

//problem: poeng må kun bli gitt når svar leveres. Kode som gir poeng må være inni kode som sier om klær er sann eller ikke. 