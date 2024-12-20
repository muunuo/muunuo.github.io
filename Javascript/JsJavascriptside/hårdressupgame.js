//sette opp variabler
let KnappVelgHar1 = document.getElementById("knappHar1");
let KnappVelgHar2 = document.getElementById("knappHar2");
let KnappVelgHar3 = document.getElementById("knappHar3"); 

let har1 = document.getElementById("dokkeHar1");
let har2 = document.getElementById("dokkeHar2");
let har3 = document.getElementById("dokkeHar3");

let godR = document.getElementById("godReaksjon"); //1. sett opp lyder (liker hun eller liker hun ikke håret)
let middelsR = document.getElementById("middelsReaksjon");
let dårligR = document.getElementById("dårligReaksjon");


let skole = document.getElementById("skoleHendelse")
let jobb = document.getElementById("jobbHendelse")
let fest = document.getElementById("festHendelse")

let poeng = 0

let har1TogF = false;//Alle begynner som av (false)
let har2TogF = false;
let har3TogF = false; 
//sette opp variabler
skole = 1
jobb = 2
fest = 3


skoleHendelse.style.display="none";
jobbHendelse.style.display="none";
festHendelse.style.display="none";



KnappVelgHar1.addEventListener("click", velgHar1); //sette opp bilder til knapper
KnappVelgHar2.addEventListener("click", velgHar2);
KnappVelgHar3.addEventListener("click", velgHar3);

let hendelseValgt = Math.floor(Math.random() *3+1);

function hendelse() {
    let hendelseValgt = Math.floor(Math.random() *3+1);
    console.log(hendelseValgt);
    
}


function HTogF() { //hva skjer når det er sant/usant
    if (har1TogF==false) { //når antrekket er av-
        har1.style.display = "none"; //-skal det ikke vises og
        godR.pause(); //lyd skal ikke spilles
        } else { //men hvis det ikke er på-
            har1.style.display = "block"; //-skal bilde vises og-
            godR.play(); //2. lyd spilles av når hår velges 
            if (hendelseValgt==1) {
                poeng=+1
            }
            //enkel løsning: legg til hva lyd som spilkles her
        }

        if (har2TogF==false) { //fungerer likt som den over
            har2.style.display = "none";
            } else {
                har2.style.display = "block";
                if (hendelseValgt==1) {
                    poeng=+2
                }
            }

            if (har3TogF==false) { //fungerer likt som de over
                har3.style.display = "none";
                } else {
                    har3.style.display = "block";
                    if (hendelseValgt==1) {
                        poeng=+0
                    }
                }
}

HTogF()//function HTogF blir kjørt her 


function velgHar1() { //når bilde1 trykkes-
    //løp funksjonen så ting faktisk skjer.
    if (har1TogF==false) { //hvis bilde er av
        har1TogF=true; //skrus de på
        har2TogF=false; //og de andre går av
        har3TogF=false; //--||--
        
    } else {//hvis det allerede er på 
        har1TogF=false; //skrus det av
    }
HTogF() //kjør funksjon
}

function velgHar2() {//samme som over

    if (har2TogF==false) {
        har2TogF=true;
        har1TogF=false;
        har3TogF=false;
    } else {
        har2TogF=false;
        
    }
    HTogF()//husk denne!!!!, ellers skjer det ingenting
}

function velgHar3() {//samme som over

    if (har3TogF==false) {
        har3TogF=true;
        har1TogF=false;
        har2TogF=false;
    } else {
        har3TogF=false;
        
    }
    HTogF()//husk denne!!!!, ellers skjer det ingenting
}
hendelse()



let leverSvar = document.getElementById("leverInnSvar")


leverSvar.addEventListener("click", leverSvarKnapp); 

function leverSvarKnapp() {
    console.log(poeng)
}



// //for å unngå å få poeng hver gang noe trykkes, og kun når det ferdige antrekket er valgt
// function leverSvarKnapp() {
// //denne inni function over eller for seg selv?
// if (hendelseValgt==1) {
//     //hvis bilde 1 vises får du x poeng
//     //hvordan vite hva bilde som vises?
//     //use true/false!

// }
// }




//if hendelse 1 skjer er hår en=1poeng, hår2=2 poeng osv.?

//vis kun en heldelse når runden starter 

//3. Hvert hår gir poeng (basert på lyd)
//4. Mengden poeng du har vises 
//4. Klær gir poeng
//4,1. Poeng blir kun gitt når antrekk "leverses"
//4,2. Du kan ikke få flere poeng med å tryke flere ganger på samme ting
//4,3. få hvert hår til å være en viss poengs
//6. poeng per kategori og sammensatt visesum i en viss situasjon
//7. Bruker blir gitt en anleding person skal kle seg til
//8. sett opp så anledning tifleigvis bestemmes fr 2-3 mulige
