//sette opp variabler
//variabler antrekk -->
let KnappVelgAntrekk1 = document.getElementById("litenRosaKjole"); 
let KnappVelgAntrekk2 = document.getElementById("litenAntrekk");


let antrekk1 = document.getElementById("rosaKjole");
let antrekk2 = document.getElementById("antrekk");
let antrekk3 = document.getElementById("festKler");

//variabler antrekk <--

//variabler hår -->
let KnappVelgHar1 = document.getElementById("knappHar1");
let KnappVelgHar2 = document.getElementById("knappHar2");
let KnappVelgHar3 = document.getElementById("knappHar3"); 

let har1 = document.getElementById("dokkeHar1");
let har2 = document.getElementById("dokkeHar2");
let har3 = document.getElementById("dokkeHar3");

let godR = document.getElementById("godReaksjon"); //1,1. sett opp lyder (liker hun eller liker hun ikke håret)
let middelsR = document.getElementById("middelsReaksjon");
let dårligR = document.getElementById("dårligReaksjon");
//variabler hår <--

//variabler poeng -->
let skole = document.getElementById("skoleHendelse");//variabler for hendelsene
let jobb = document.getElementById("jobbHendelse");
let fest = document.getElementById("festHendelse");
let ferdig = document.getElementById("brukerErFerdig");

let leverSvar = document.getElementById("leverInnSvar");

let brukerPoeng = document.getElementById("brukerSerPoeng");

let poeng = 0; //poeng starter på 0
//variabler poeng <--

//true/false-->
let antrekk1TogF=false; //2. Det begynner som av
let antrekk2TogF=false;
let antrekk3TogF=false;

let har1TogF = false;//Alle begynner som av (false)
let har2TogF = false;
let har3TogF = false; 

let skolehendelse = true;//Alle begynner som av (false), denner er koblet til skole
let jobbhendelse = false;//koblett til jobb
let festhendelse = false; //koblet til fest
let begynnNy = false;//koblett til ferdig

//true/false <--

document.getElementById("brukerSerPoeng").innerHTML =poeng; //sier til bruker hva poeng de har.

hendelse()//refererer til hva hendelse man kler seg for

//knapper-->
KnappVelgAntrekk1.addEventListener("click", velgAntrekk1);//1. Lag en knapp
KnappVelgAntrekk2.addEventListener("click", velgAntrekk2);

KnappVelgHar1.addEventListener("click", velgHar1); //sette opp bilder til knapper
KnappVelgHar2.addEventListener("click", velgHar2);
KnappVelgHar3.addEventListener("click", velgHar3);
leverSvar.addEventListener("click", leverSvarKnapp); //2,2. Sett opp så knappen bytter fra hendelse 1 til 2 og 2 til 3
//knapper <--


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
        skolehendelse=false
        jobbhendelse=true
        if (har1TogF==true) { //hvis hendelse skole skjer, og du velger hår en får du x mengde poeng
            poeng=poeng+2
        } else if (har2TogF==true) {
            poeng=poeng+1 //med poengene gitt her, så får man kun poeng fra håret som er på, ikke fra å klikke på håret.
        } else if (har3TogF==true){
            poeng=poeng+0
        }

        if (antrekk1TogF==true) { 
            poeng=poeng+1
        } else if (antrekk2TogF==true) {
            poeng=poeng+2 
        }
        console.log(poeng)//hver gang man spiller en runde kan man se poeng i console log.

    } else if(jobbhendelse==true) {
        jobbhendelse=false;
        festhendelse=true;
        if (har1TogF==true) {
            poeng=poeng+1;
        } else if (har2TogF==true) {
            poeng=poeng+2; //med poengene gitt her, så får man kun poeng fra håret som er på, ikke fra å klikke på håret.
        } else if (har3TogF==true){
            poeng=poeng+0;
        }

        if (antrekk1TogF==true) { 
            poeng=poeng+2
        } else if (antrekk2TogF==true) {
            poeng=poeng+1
        }
        console.log(poeng);

    } else if(festhendelse==true){
        festhendelse=false;
        begynnNy = true;
        if (har1TogF==true) {
            poeng=poeng+1;
        } else if (har2TogF==true) {
            poeng=poeng+0;//med poengene gitt her, så får man kun poeng fra håret som er på, ikke fra å klikke på håret.
        } else if (har3TogF==true){
            poeng=poeng+2;
        }

        if (antrekk1TogF==true) { 
            poeng=poeng+1
        } else if (antrekk2TogF==true) {
            poeng=poeng+2 
        }
        console.log(poeng);
    } else if(begynnNy==true){ //tom skjerm skjer fordi denne. Hvis du vil endre det sett det så eu går til skole hendelse
        begynnNy=false //skal brukes for å vise poeng på slutten.
        skolehendelse=true
    }

    document.getElementById("brukerSerPoeng").innerHTML =poeng; //no øker poeng hver gang bruker leverer svar
    HTogF();
    hendelse();
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

}


function HTogF() { //hva skjer når det er sant/usant
    if (har1TogF==false) { //når antrekket er av-
        har1.style.display = "none"; //-skal det ikke vises og
        godR.pause(); //lyd skal ikke spilles
        } else { //men hvis det ikke er på-
            har1.style.display = "block"; //-skal bilde vises og-
            godR.play(); //1,2. lyd spilles av når hår velges 
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

    //løp funksjonen så ting faktisk skjer.
    if (antrekk1TogF==false) {//3. Når trykket blir den til på
        antrekk1TogF=true;
        antrekk2TogF=false;
        
    } else {//4.når trykket igjen blir den til av
        antrekk1TogF=false;
    }
TogF();
}

function velgAntrekk2() {

    if (antrekk2TogF==false) {
        antrekk2TogF=true;
        antrekk1TogF=false;
    } else {
        antrekk2TogF=false;
        
    }
    TogF();//husk denne!!!!, ellers skjer det ingenting
}
//antrekk <--



//notater/planer-->

//x 1,3. Hvert hår gir poeng (basert på lyd)
//1,4. Mengden poeng du har vises 
//1,4. Klær gir poeng
//x 1,4,1. Poeng blir kun gitt når antrekk "leverses"
//x 1,4,2. Du kan ikke få flere poeng med å tryke flere ganger på samme ting
//x 1,4,3. få hvert hår til å være en viss poengs
//1,6. poeng per kategori og sammensatt visesum i en viss situasjon
//x 1,7. Bruker blir gitt en anleding person skal kle seg til
//1,8. sett opp så anledning tifleigvis bestemmes fr 2-3 mulige

//x 2,1. Fjern tilfeldigheten med hendelsne 

//x 2,3. kan no bruke hendelsenavn i stede for tall.

//problem: poeng må kun bli gitt når svar leveres. Kode som gir poeng må være inni kode som sier om klær er sann eller ikke. 

//ting som ikke fungerte-->

//<3 redundent kode: true false gjør samme ting.
// //skole er eneste so begynner som syneligt
// jobbHendelse.style.display="none"; //må bruke id navnet for å velge display
// festHendelse.style.display="none";
// restartSpill.style.display="none";


//<3 makerer notater på hva som var planen med koden i gravplassen

// <3 orginal plan for å bytte fra velg antrekk til velg hår.
// let neste= document.getElementById("nesteKnapp"); 
// let forige = document.getElementById("forigeKnapp"); 

//<3 før jeg byttet fra tilfeldig til faste hendelser. (hadde problemet med poeng hver gang det tykkes her om)
// //for å unngå å få poeng hver gang noe trykkes, og kun når det ferdige antrekket er valgt 
// function leverSvarKnapp() { 
// //denne inni function over eller for seg selv?
// if (hendelseValgt==1) {
//     //hvis bilde 1 vises får du x poeng
//     //hvordan vite hva bilde som vises?
//     //use true/false!
// }
// }

// let hendelseValgt = Math.floor(Math.random() *3+1);

// function hendelse() {
//     let hendelseValgt = Math.floor(Math.random() *3+1);
//     console.log(hendelseValgt);
    
// }

//sette opp variabler
// skole = 1
// jobb = 2
// fest = 3

//if hendelse 1 skjer er hår en=1poeng, hår2=2 poeng osv.?

//vis kun en heldelse når runden starter 

//<3 før jeg fant ut jeg ikke måtte ha egen knapp for å restarte spillet. 
// restart.addEventListener("click", begynnNy); 

// function begynnNy() {
//     //når trykket starter spillet på nytt
// }

        // leverInnSvar.style.display="none"
        // restartSpill.style.display="block"


//<3 når poengsystemet lå samme sted som håret ble valgt 
            // if (skoleKler==true) {
            //     poeng=poeng+1 //fungerer, men må no fikse se hendelse endres osv.
            // } else if (jobbKler==true) {
            //     poeng=poeng+2
            // } else if (festKler==true) {
            //     poeng=poeng+0
            // }
            //enkel løsning: legg til hva lyd som spilkles her