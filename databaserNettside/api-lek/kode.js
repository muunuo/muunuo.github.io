
let paragraf = document.createElement("p"); //opretter en tag for html
let overskrift = document.createElement("h1");
let bilde = document.createElement("img");

paragraf.innerText = "Dette er et paragraf";
overskrift.innerText = "Overskrift";
bilde.src = "/api-lek/fintBilde.avif";

document.body.appendChild(overskrift); 
document.body.appendChild(paragraf); //jeg legger til er barn, og det barnet er paragrafet
document.body.appendChild(bilde); 


