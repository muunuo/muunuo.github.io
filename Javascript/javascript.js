// alert("heisann"); // dette lager en popup
// console.log("dette er en utskrift til console.log!"); // gir oss feilmeldingene når du er på inspect på nettsiden

// // spør etter navnet til brukeren og skriver det ut
// // promt betyr at dataen skal si det til brukeren
// let navn = prompt("hva heter du?"); // gjør om svaret på promten til en variabel (let=variabel)
// console.log(navn); // navn blir skrevet ut i console
// document.getElementById("utskrift").innerText = "hei, " + navn +"!";
// // document er html, vi sier den skal se på sjefs dokumentet som er html

let hobby = prompt("hva er en av hobbyene dine?");
console.log(paragraf);
document.getElementById("paragraf").innerText = hobby + " er veldig gøyt!";


let alder = prompt ("Hva er ble du født?");
let år = new Date();
alder = år.getFullYear() - alder;
document.getElementById("alder").innerText = "er du " + alder + " år gammel?";
console.log(år.getFullYear());


// if ("alder = år") return 0 
