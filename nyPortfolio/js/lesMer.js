let lesKode = document.getElementById("lesMerKode");

let kodeNettside = document.getElementById("visKodeNettside");

lesKode.addEventListener("click", merKode);

kodeNettside.style.display ="none"


function merKode() {
    console.log("hei")
    if (kodeNettside.style.display=="none") {
        kodeNettside.style.display="block"
    } else {
        kodeNettside.style.display="none"
    }
}