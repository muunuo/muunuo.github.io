let KnappVelgHar1 = document.getElementById("knappHar1");
let KnappVelgHar2 = document.getElementById("knappHar2");
let KnappVelgHar3 = document.getElementById("knappHar3"); 



let har1 = document.getElementById("dokkeHar1");
let har2 = document.getElementById("dokkeHar2");
let har3 = document.getElementById("dokkeHar3")

//Alle begynner som av (false)
let har1TogF = false;
let har2TogF = false;
let har3TogF = false;

KnappVelgHar1.addEventListener("click", velgHar1); //velgHar1 er no en function
KnappVelgHar2.addEventListener("click", velgHar2);
KnappVelgHar3.addEventListener("click", velgHar3);


function HTogF() { //her inne skal vi si hva som skjer når noe er sant eller usant.

    if (har1TogF==false) { //om antrekket er av
        har1.style.display = "none"; //skal det ikke vises
        } else { //men hvis det ikke er av (altså på)
            har1.style.display = "block"; //skal det vises
        }

        if (har2TogF==false) { 
            har2.style.display = "none";
            } else {
                har2.style.display = "block";
            }

            if (har3TogF==false) { 
                har3.style.display = "none";
                } else {
                    har3.style.display = "block";
                }

}

HTogF()//function TogF blir kjørt her 


function velgHar1() { //når bilde1 trykkes kjøres alt her
    //løp funksjonen så ting faktisk skjer.
    if (har1TogF==false) {
        har1TogF=true;
        har2TogF=false;
        har3TogF=false;
        
    } else {
        har1TogF=false;
    }
HTogF()
}

function velgHar2() {

    if (har2TogF==false) {
        har2TogF=true;
        har1TogF=false;
        har3TogF=false;
    } else {
        har2TogF=false;
        
    }
    HTogF()//husk denne!!!!, ellers skjer det ingenting
}

function velgHar3() {

    if (har3TogF==false) {
        har3TogF=true;
        har1TogF=false;
        har2TogF=false;
    } else {
        har3TogF=false;
        
    }
    HTogF()//husk denne!!!!, ellers skjer det ingenting
}



