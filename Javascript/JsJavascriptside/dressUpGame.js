
//NB!!! denne er ikke i bruk, begold kun for å se hva du gjorde feil 
//(du brukte true false på bilder i stede for variablene sutte opp som true og false)



let KnappVelgAntrekk1 = document.getElementById("litenRosaKjole");
let KnappVelgAntrekk2 = document.getElementById("litenAntrekk");

let bildeAntrekkNaken = document.getElementById("nakenKlær")
let antrekk1 = document.getElementById("rosaKjole");
let antrekk2 = document.getElementById("antrekk");
console.log(antrekk1)
//gjøm antrekkene
let antrekk1Vises =false //antrekket er av ved start
let antrekk2Vises =false //antrekket er av ved start


let nakenKlærVises =true //naken antrekket er på ved start



//lag små antrekk om til knapper
KnappVelgAntrekk1.addEventListener("click", velgAntrekk1);
KnappVelgAntrekk2.addEventListener("click", velgAntrekk2);



//Hvis antrek x velges gjømmes alle andre antrekk
//true skrur på et antrekk og skrur av de andre antrekkene 
function visesEllerIkke() {
    if (antrekk1Vises==false) { //sier at når fals vises ikke antrekket
        antrekk1.style.display="none"
    }else{
        antrekk1.style.display="block"
        antrekk2Vises=false
        nakenKlærVises=false
    }
    
    if (antrekk2Vises==false) {
        antrekk2.style.display="none"
    }else{
        antrekk2.style.display="block"
        antrekk1Vises=false
        nakenKlærVises=false
    }
    
    if (nakenKlærVises==false) {
        bildeAntrekkNaken.style.display="none"
    }else{
        bildeAntrekkNaken.style.display="block"
        antrekk1Vises=false
        antrekk2Vises=false
    }
    
    // if (antrekk1Vises==true) { 
    //     antrekk1.style.display="block"
    //     antrekk2=false
    //     bildeAntrekkNaken=false
    // }
}

visesEllerIkke()


function velgAntrekk1() {
    
    console.log("knapp1 trykkes")
    
    if (antrekk1Vises==false) { //hvis hun ikke har antrekket får hun det
        antrekk1Vises=true
    } else { //hvis hun har det fjernes det og nakenKlær vises
        antrekk1Vises=false
        nakenKlærVises=true //så når antrekket tas av, så er ikke hun naken
    }

    visesEllerIkke()
    //løp funksjonen så ting faktisk skjer.

//hvis bilde 2 er på når bilde 1 velges skal bilde 2 skrus av
}


function velgAntrekk2() {
    
    console.log("knapp1 trykkes")
    
    if (antrekk2Vises==false) { //hvis hun ikke har antrekket får hun det
        antrekk2Vises=true
    } else { //hvis hun har det fjernes det og nakenKlær vises
        antrekk2Vises=false
        nakenKlærVises=true //så når antrekket tas av, så er ikke hun naken
    }
    visesEllerIkke()

    //løp funksjonen så ting faktisk skjer.

//hvis bilde 2 er på når bilde 1 velges skal bilde 2 skrus av
}








//kan man gi en kjennerel ordre om at hvis x=fals skjer x.style.display="none", uansett hva som er fals?

//Hvis antrekk x velges skal alt annet gjømmes og den vises
// function velgAntrekk1() {
//     console.log("knapp1 trykkes")
//     // ikke testet
// //     let bildeAntrekk1=true //da vet pcen at denne er på

// // //hvis bilde 2 er på når bilde 1 velges skal bilde 2 skrus av
// //     if (bildeAntrekk2==true) { //ber pc kjekke om antrekk to er på
// //         bildeAntrekk2=false //hvis antrekk to er på skal det av
// //         bildeAntrekk2.style.display="none" //antrekk to skal ikke være synelig når antrekk to er av
// //     }
// }
