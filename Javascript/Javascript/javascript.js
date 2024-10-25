// alert("heisann"); // dette lager en popup
// console.log("dette er en utskrift til console.log!"); // gir oss feilmeldingene når du er på inspect på nettsiden

// spør etter navnet til brukeren og skriver det ut
// promt betyr at dataen skal spøre brukeren om det som står inni.
// let navn = prompt("hva heter du?"); // gjør om svaret på promten til en variabel (let=variabel)
// console.log(navn); // navn blir skrevet ut i console
// document.getElementById("utskrift").innerText = "hei, " + navn +"!";
// // document er html dokumentet js er koblet til, vi sier den skal se på sjefs dokumentet som er html

// let hobby = prompt("hva er en av hobbyene dine?");
// console.log(paragraf);
// document.getElementById("paragraf").innerText = hobby + " er veldig gøyt!";
// // punktom kan leses som si


let alder = prompt ("What year where you born?");
let år = new Date();
alder = år.getFullYear() - alder;
document.getElementById("alder").innerText = "er du " + alder + " år gammel?";
console.log(år.getFullYear());

// vi spør om favorittside og bytter bakrunns fargen til det
// 3 eksempler på å gjøre dette på:
//alle må ha: let farge = prompt ("What is you're favoritt color?"); // må svare på engelsk for at det fungerer
// //1) document.body.style.backgroundColor = farge; //sier hvor koden skal hente info, hvilket dokument, hva det skal endre, hva de endrer osv.
//2) document.querySelector("#kroppen").style.backgroundColor = farge;// jo bjørnar foretrekker denne
// //3) document.getElementById("kroppen").style.backgroundColor = farge;

let farge = prompt ("What are your two favorit colors, put a comma between");
// document.getElementById("kroppen").style.background = 

let info = document.querySelector("body").style.background = "linear-gradient(45deg," + farge + ")";
console.log(info);

let tekstfarge = prompt ("What color should the text be?")
document.querySelector("#tekstfarge").style.color = tekstfarge


