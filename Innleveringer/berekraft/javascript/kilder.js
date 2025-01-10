let FF1 = document.getElementById("funFact1");
let info = document.getElementById("merInfo");


info.addEventListener("click", knappInfo);

TogFff1 = false;

Co2Utslipp()

function Co2Utslipp() {

    if (TogFff1==false) {// ff=fun fact
        FF1.style.display="none";
    } else {
        FF1.style.display="block";
    }
}

function knappInfo() {
    if (TogFff1==false) {
        TogFff1 = true;
    } else {
        TogFff1 = false;
    }
    Co2Utslipp();
}


let sk1 = document.getElementById("sk1Felt");
let kilderS1 = document.getElementById("statistikk1Kilder");

kilderS1.addEventListener("click", kilderS1Knapp);

TogFsk1Felt = false;

kilder()

function kilder() {

    if (TogFsk1Felt==false) {// ff=fun fact
        sk1.style.display="none";
    } else {
        sk1.style.display="block";
    }
}

function kilderS1Knapp() {
    if (TogFsk1Felt==false) {
        TogFsk1Felt = true;
    } else {
        TogFsk1Felt = false;
    }
    kilder();
}





