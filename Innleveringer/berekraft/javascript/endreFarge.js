let SH = document.getElementById("svartHvit"); //hva siden til vanelig ser ut som
let LogS = document.getElementById("vaneligFarge"); //side som er optimal for de med dårlig syn
let MM = document.getElementById("morkeModus");

let SHtOgF = false; //navn: hva farge det er true eller false
let LogStOgF = false;
let MMtOgF = false;
defult()

SH.addEventListener("click", velgSH);
LogS.addEventListener("click", velgLogS);//gjør fargene til en knapp
MM.addEventListener("click", velgMM);


function defult() { //if farge 1 og 2 er av skal defult være på.
    if (SHtOgF==false && LogStOgF==false && MMtOgF==false) {
        document.body.style.backgroundColor = "#407551"
        document.body.style.color = "#d6f0df"
        hovedId.style.backgroundColor = "#7B9E87"
        sideId.style.backgroundColor = "#7B9E87"
        hovedId.style.border = "solid 2rem #407551"
        sideId.style.border = "solid 2rem #407551"
        hovedId.style.color = "#000000"
        sideId.style.color = "#000000"
        java.style.backgroundColor = "#406975"
        kode.style.backgroundColor = "#406975"
    }
}

function farge() {
    if (SHtOgF==false) {
        defult()
    } else {
        document.body.style.backgroundColor = "#e4e4e4"
        document.body.style.color = "#000000"
        hovedId.style.border = "solid 2rem #e4e4e4"
        sideId.style.border = "solid 2rem #e4e4e4"
        hovedId.style.backgroundColor = "#FFFFFF"
        sideId.style.backgroundColor = "#FFFFFF"
        hovedId.style.color = "#000000"
        sideId.style.color = "#000000"
        java.style.backgroundColor = "#181818"
        kode.style.backgroundColor = "#181818"
    }
    if (LogStOgF==false) {// hadde gjordt dette om så det ikke er defult koden igjen, men knapt med tid så
        defult()
    } else {
        document.body.style.backgroundColor = "#407551"
        document.body.style.color = "#d6f0df"
        hovedId.style.backgroundColor = "#7B9E87"
        sideId.style.backgroundColor = "#7B9E87"
        hovedId.style.border = "solid 2rem #407551"
        sideId.style.border = "solid 2rem #407551"
        hovedId.style.color = "#000000"
        sideId.style.color = "#000000"
        java.style.backgroundColor = "#406975"
        kode.style.backgroundColor = "#406975"
    }
    if (MMtOgF==false) {
        defult()
    } else {
        document.body.style.backgroundColor = "#303030"
        document.body.style.color = "#FFFFFF"
        hovedId.style.border = "solid 2rem #303030"
        sideId.style.border = "solid 2rem #303030"
        hovedId.style.backgroundColor = "#181818"
        sideId.style.backgroundColor = "#181818"
        hovedId.style.color = "#ffffff"
        sideId.style.color = "#ffffff"
        java.style.backgroundColor = "#181818"
        kode.style.backgroundColor = "#181818"
    }
}


function velgSH() {
    console.log("helloduTrykketKnpp")

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

