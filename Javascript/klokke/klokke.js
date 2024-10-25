console.log("javascript tilkoblett");
// let tid = new Date();
// document.querySelector("#klokke").innerText = tid; 



function klokken(){ // det her inni skjer hvert sekund
    
    let noverendetid = new Date();
    // henter tid,min timer
    let time = noverendetid.getHours();
    let min = noverendetid.getMinutes();
    let sek = noverendetid.getSeconds();

    time = time < 10 ? '0' + time : time;
    min = min < 10 ? '0' + min : min;
    sek = sek < 10 ? '0' + min : min;

    document.getElementById("klokken").innerText = "tiden er " + time + ":" + min + ":" + sek;

}

setInterval(klokken,1000); // hvert tusene millisikund så opptateres klokken

