let KnappVelgHar1 = document.getElementById("knappHar1");
let KnappVelgHar2 = document.getElementById("knappHar2");


let har1 = document.getElementById("dokkeHar1");
let har2 = document.getElementById("dokkeHar2");

//hår begynner som av
let har1TogF=false;
let har2TogF=false;


KnappVelgHar1.addEventListener("click", velgHar1);
KnappVelgHar2.addEventListener("click", velgHar2);


function HTogF() { //her inne skal vi si hva som skjer når noe er sant eller usant.

    if (har1TogF==false) { //om antrekket er av
        har1.style.display="none"; //skal det ikke vises
        } else { //men hvis det ikke er av (altså på)
            har1.style.display="block"; //skal det vises
            
        }

        if (har2TogF==false) { 
            har2.style.display="none"
            } else {
                har2.style.display="block" 
            }

}

HTogF()//function TogF blir kjørt her 


function velgHar1() {
    //løp funksjonen så ting faktisk skjer.
    if (har1TogF==false) {//3. Når trykket blir den til på
        har1TogF=true
        har2TogF=false
        
    } else {//4.når trykket igjen blir den til av
        har1TogF=false
    }
HTogF()
}

function velgHar2() {

    if (har2TogF==false) {
        har2TogF=true
        har1TogF=false
    } else {
        har2TogF=false
        
    }
    HTogF()//husk denne!!!!, ellers skjer det ingenting
}



