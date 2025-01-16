// let FF1 = document.getElementById("funFact1");
// let info = document.getElementById("merInfo");


// info.addEventListener("click", knappInfo);

// TogFff1 = false;

// funksjon()

// function funksjon() {

//     if (TogFff1==false) {// ff=fun fact
//         FF1.style.display="none";
//     } else {
//         FF1.style.display="block";
//     }
// }

// function knappInfo() {
//     if (TogFff1==false) {
//         TogFff1 = true;
//     } else {
//         TogFff1 = false;
//     }
//     funksjon();
// }




let sk1 = document.getElementById("sk1Felt");
let sk2 = document.getElementById("sk2Felt");
let sk3 = document.getElementById("sk3Felt");
let sk4 = document.getElementById("sk4Felt");
let kilderS1 = document.getElementById("statistikk1Kilder");

kilderS1.addEventListener("click", kilderS1Knapp);

TogFsk1Felt = false;


kilder()

function kilder() {

    if (TogFsk1Felt==false) {// ff=fun fact
        sk1.style.display="none";
        sk2.style.display="none";
        sk3.style.display="none";
        sk4.style.display="none";
    } else {
        sk1.style.display="block";
        sk2.style.display="block";
        sk3.style.display="block";
        sk4.style.display="block";
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





