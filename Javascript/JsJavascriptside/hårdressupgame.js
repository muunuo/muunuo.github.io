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

let har1TogF = false;//Alle begynner som av (false)
let har2TogF = false;
let har3TogF = false; 
//sette opp variabler


KnappVelgHar1.addEventListener("click", velgHar1); //sette opp bilder til knapper
KnappVelgHar2.addEventListener("click", velgHar2);
KnappVelgHar3.addEventListener("click", velgHar3);



function HTogF() { //hva skjer når det er sant/usant
    if (har1TogF==false) { //når antrekket er av-
        har1.style.display = "none"; //-skal det ikke vises og
        godR.pause(); //lyd skal ikke spilles
        } else { //men hvis det ikke er på-
            har1.style.display = "block"; //-skal bilde vises og-
            godR.play(); //2. lyd spilles av når hår velges 
            //enkel løsning: legg til hva lyd som spilkles her
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

let skole = document.getElementById("skoleHendelse")
let jobb = document.getElementById("jobbHendelse")
let fest = document.getElementById("festHendelse")

skole = 1
jobb = 2
fest = 3

skoleHendelse.style.display="none";
jobbHendelse.style.display="none";
festHendelse.style.display="none";


// function hendelse() {
//     let a = Math.floor(Math.random() *3+1);
//     console.log(a);
    
//     if () {
        
//     } else {
        
//     }
// }


// hendelse()

//vis kun en heldelse når runden starter 

//3. Hvert hår gir poeng (basert på lyd)
//4. Mengden poeng du har vises 
//4. Klær gir poeng
//5. poeng summeres 
//6. poeng per kategori og sammensatt vises?
//7. Bruker blir gitt en anleding person skal kle seg til
//8. sett opp så anledning tifleigvis bestemmes fr 2-3 mulige



// enkel quiz
// let listeSpørsmål=["Going to work","Going to a party","relaxing at home"]
// let listeSvar=[]
// //x er en variabel, samme som i. Den endrer seg så har ikke et bestemt navn.
// // spmNr er spørsmålnummer
// for(let x = 0; x< listeSpørsmål.length; x++){
//     let svar = listeSpørsmål[x];
//     console.log("Spørsmål: " + listeSpørsmål[x]);
//     if (svar == listeSvar[x]) {
//         console.log ("Det er riktig, bra jobbet!");
//     } else {
//         console.log ("Det er feil!")
//         console.log("Riktig Svar: " + listeSvar[x]);
//     }
// }