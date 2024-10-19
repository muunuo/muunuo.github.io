alert("heisann"); // dette lager en popup
console.log("dette er en utskrift til console.log!"); // gir oss feilmeldingene når du er på inspect på nettsiden

// spør etter navnet til brukeren og skriver det ut
// promt betyr at dataen skal si det til brukeren
let navn = prompt("hva heter du?"); // gjør om svaret på promten til en variabel (let=variabel)
console.log(navn); // navn blir skrevet ut i console
document.getElementById("utskrift").innerText = "hei, " + navn +"!";
// document er html, vi sier den skal se på sjefs dokumentet som er html