let KnappVelgAntrekk1 = document.getElementById("litenRosaKjole");
let KnappVelgAntrekk2 = document.getElementById("litenAntrekk");

let bildeAntrekkNaken = document.getElementById("nakenKler");
let antrekk1 = document.getElementById("rosaKjole");
let antrekk2 = document.getElementById("antrekk");


//2. Det begynner som av
let antrekk1TogF =false;
let antrekk2TogF =false;


//1. Lag en knapp
KnappVelgAntrekk1.addEventListener("click", velgAntrekk1);
KnappVelgAntrekk2.addEventListener("click", velgAntrekk2);


function TogF() { //her inne skal vi si hva som skjer når noe er sant eller usant.
    if (antrekk1TogF==false) { //om antrekket er av
        antrekk1.style.display="none"; //skal det ikke vises
        } else { //men hvis det ikke er av (altså på)
            antrekk1.style.display="block"; //skal det vises
        }

        if (antrekk2TogF==false) { 
            antrekk2.style.display="none"
            } else {
                antrekk2.style.display="block" 
            }

            // if (antrekk0TogF==false) { 
            //     antrekk0.style.display="none"
            //     } else {
            //         antrekk0.style.display="block" 
            //     }
}

TogF() //function TogF blir kjørt her 


function velgAntrekk1() {
console.log("Rosa ble trykket")
    //løp funksjonen så ting faktisk skjer.
    if (antrekk1TogF==false) {//3. Når trykket blir den til på
        antrekk1TogF=true
        
    } else {//4.når trykket igjen blir den på
        antrekk1TogF=false
    }
    TogF() //functionen blir kjørt
}

function velgAntrekk2() {
    console.log("knapp2")

    if (antrekk2TogF==false) {
        antrekk2TogF=true
    } else {
        antrekk2TogF=false
    }
    TogF()
}





//1,2. gjør samme som over for nr2
//1,3. hvis nr 1 er på, og nr2 trykkes, slås 1 av og 2 på.

