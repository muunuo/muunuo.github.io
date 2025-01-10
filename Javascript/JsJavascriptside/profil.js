
let bilde1 = document.getElementById("profilbilde1");
let bilde2 = document.getElementById("profilbilde2");



// sett opp og gjør bilde 1 til en knapp
bilde1.addEventListener("click", byttTilBilde2);
// sett opp og gjør bilde 2 til en knapp
bilde2.addEventListener("click", byttTilbakeTilBilde1);
// gjør bilde 2 usynelig
bilde2.style.display = "none";


//gjør samme for når bilde to trykkes

function byttTilbakeTilBilde1() {
    bilde2.style.display = "none";
    bilde1.style.display = "block"
}
// Når bilde 1 trykkes gjøm det og vis bilde 2
function byttTilBilde2() {
    bilde1.style.display = "none";
    bilde2.style.display = "block"
}
