// let tekstfarge = prompt ("What color should the text be?")
// document.querySelector("#tekstfarge").style.color = tekstfarge


//Sette opp 4 farger man kan velge mellom


//Når knapp trykkes endres fargen

//Ekstra:
// Gjør at det er en kombo text/farge endring basert på hva som er mer synelig, bruk et bilde av text på den fargen for å vise hvordan det vil se ut.
//Når du hovrer vises det, npår du trykkes aktiveres det


let normal = document.getElementById("farge1") //hva siden til vanelig ser ut som
let høyKontrast = document.getElementById("farge2") //side som er optimal for de med dårlig syn

let kontrast = false
let vanelig = false

høyKontrast.addEventListener("click", velgHøyKontrast);//gjør fargene til en knapp
normal.addEventListener("click", velgNormal);

function farge() {
    if (kontrast==false) {
        // document.body.style.backgroundColor = "#FFFFFF"
        // document.body.style.color = "#000000"
        // document.body.style.fontWeight = "normal"
        defult()
    } else {
    console.log("høy kontrast er valgt")
    document.body.style.backgroundColor = "#F7EDE2"
    document.body.style.color = "#f5cac3"
    document.body.style.fontWeight = "bold"
    }
    if (vanelig==false) {
        // document.body.style.backgroundColor = "#FFFFFF"
        // document.body.style.color = "#000000"
        // document.body.style.fontWeight = "normal"
        defult()
    } else {
        console.log("normal er valgt")
        document.body.style.backgroundColor = "#f5cac3"
        document.body.style.color = "#F7EDE2"
    }
}

function defult() {
    if (vanelig==false,kontrast==false) {
        document.body.style.backgroundColor = "#FFFFFF"
        document.body.style.color = "#000000"
        document.body.style.fontWeight = "normal"
    }
}
//if farge 1 og 2 er av skal defult være på. 

function velgNormal() {
    if (vanelig==false) {
        vanelig=true
        kontrast=false
    } else {
        vanelig=false
    }
    farge()
}

function velgHøyKontrast() {
    if (kontrast==false) {
        kontrast=true
        vanelig=false
    } else {
        kontrast=false
    }
    farge()
}

//svaralternativ på quiz

