let ISP = document.getElementById("ISPperagraf")

let ISPknapp = document.getElementById("knapp1")

ISPknapp.addEventListener("click", klikkISP);

ISP.style.display="none"

function klikkISP() {
    if (ISP.style.display=="none") {
        ISP.style.display="block"
    } else {
        ISP.style.display="none"
    }
}

let pakke = document.getElementById("pakkePeragraf")

let pakkeKnapp = document.getElementById("knapp2")

pakkeKnapp.addEventListener("click", klikkPakke);

pakke.style.display="none"

function klikkPakke() {
    if (pakke.style.display=="none") {
        pakke.style.display="block"
    } else {
        pakke.style.display="none"
    }
}


let komp = document.getElementById("komprimeringPeragraf")

let kompKnapp = document.getElementById("knapp3")

kompKnapp.addEventListener("click", klikkKomp);

komp.style.display="none"

function klikkKomp() {
    if (komp.style.display=="none") {
        komp.style.display="block"
    } else {
        komp.style.display="none"
    }
}