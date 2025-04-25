
let SH = document.getElementById("svartHvit"); //hva siden til vanelig ser ut som
let LogS = document.getElementById("LillaOgSvart"); //side som er optimal for de med dårlig syn
let MM = document.getElementById("morkeModus");
let KMM = document.getElementById("klassiskMorkeModus"); 

let vKnapp = document.getElementById("svarAlternativ1")
let hKnapp = document.getElementById("svarAlternativ2")
let sendSvar = document.getElementById("sendInnAlleSvar")

let m = document.getElementById("meny")

let SHtOgF = false; //navn: hva farge det er true eller false
let LogStOgF = false;
let MMtOgF = false;
let KMMtOgF = false;
defult()

SH.addEventListener("click", velgSH);
LogS.addEventListener("click", velgLogS);//gjør fargene til en knapp
MM.addEventListener("click", velgMM);
KMM.addEventListener("click", velgKMM);

function defult() { //if farge 1 og 2 er av skal defult være på.
    if (SHtOgF==false && LogStOgF==false && MMtOgF==false && KMMtOgF==false) {
        document.body.style.backgroundColor = "#fff4fb"
        document.body.style.color = "#98729d"
        endreFarge.style.backgroundColor = "#c48ab1"
    }
}

function farge() {
    if (SHtOgF==false) {
        defult()
    } else {
    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "#000000"
    sendSvar.style.backgroundColor = "#787878"
    }
    if (LogStOgF==false) {
        defult()
    } else {
        document.body.style.backgroundColor = "#e1dee9"
        document.body.style.color = "#1f1a29"
        sendSvar.style.backgroundColor = "#B6A6CA"
        
    }
    if (MMtOgF==false) {
        defult()
    } else {
        document.body.style.backgroundColor = "#033F63"
        document.body.style.color = "#c1d9c4"
        sendSvar.style.backgroundColor = "#787878"
    }
    if (KMMtOgF==false) {
        defult()
    } else {
        document.body.style.backgroundColor = "#000000"
        document.body.style.color = "#aeaeae"
        sendSvar.style.backgroundColor = "#787878"
    }
}


function velgSH() {

    if (SHtOgF==false) {
        SHtOgF=true
        LogStOgF=false
        MMtOgF=false
        KMMtOgF=false
    } else {
        SHtOgF=false
    }
    farge()
}

function velgLogS() {
    if (LogStOgF==false) {
        LogStOgF=true
        SHtOgF=false
        MMtOgF=false
        KMMtOgF=false
    } else {
        LogStOgF=false
    }
    farge()
}

function velgMM() {
    if (MMtOgF==false) {
        MMtOgF=true
        SHtOgF=false
        LogStOgF=false
        KMMtOgF=false
    } else {
        MMtOgF=false
    }
    farge()
}
function velgKMM() {
    if (KMMtOgF==false) {
        KMMtOgF=true
        SHtOgF=false
        LogStOgF=false
        MMtOgF=false
    } else {
        KMMtOgF=false
    }
    farge()
}
//svaralternativ på quiz

