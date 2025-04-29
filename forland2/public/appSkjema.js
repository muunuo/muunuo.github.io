// let popup = document.getElementById("loggInnPopup");

// let opprettKonto = document.getElementById("svarInnlogging");
// let neiInnlogging = document.getElementById("neiTilInnlogging");


// opprettKonto.addEventListener("click", opprett);
// neiInnlogging.addEventListener("click", nei);

// popup.style.display ="none"


// function opprett() {
//     console.log("hei")
//     if (popup.style.display=="none") {
//         popup.style.display="block"
//     } else {
//         popup.style.display="none"
//     }
// }

// function nei() {
//     if (popup.style.display=="none") {
//         popup.style.display="block"
//     } else {
//         popup.style.display="none"
//     }
// }


document.addEventListener('DOMContentLoaded', () => {// svare på skjema
    document.getElementById('svarPaSkjema').addEventListener('click', async () => {
        const navn = document.getElementById('navn').value;
        const bedriftNavn = document.getElementById('bedriftNavn').value;
        const epost = document.getElementById('epost').value;
        const telefon = document.getElementById('telefon').value;
        const beskjed = document.getElementById('beskjed').value;

        // popup.style.display="block" // når bruker svarer får de popupen for å kunne logge inn
    });
});

document.addEventListener('DOMContentLoaded', () => { // oprette en konto
    document.getElementById('opprettKonto').addEventListener('click', async () => {
        const brukernavn = document.getElementById('brukernavn').value;
        const epostKonto = document.getElementById('epostKonto').value;
        // const kunde_id = document.getElementById('kunde_id').value; //usikker på om dette er noe jeg kommer til å trenge eller ikke
        const passord = document.getElementById('passord').value;
    });
});


        // try{
        //     const responses = await fetch('/submit', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ navn, bedriftNavn, epost, telefon, beskjed })
        //     });

        //     const result = await response.json

        //     if (responses.ok) {
        //         alert ('Svar sendt inn!');

        //         document.getElementById('navn').value = ''; // ved å flytte de inn her, så tømmes kun skjema hvis bruker sitt svar ble sendt inn
        //         document.getElementById('bedriftNavn').value = '';
        //         document.getElementById('epost').value = '';
        //         document.getElementById('telefon').value = '';
        //         document.getElementById('beskjed').value = '';
        //     } else {
        //         alert('Feil ved innsending');
        //     } 
        // } catch (error) {
        //     //i tilfelle av enentuelle nettverkfeil
        //     console.error('Nettwork error', error);
        //     alert('Det oppsto en nettverksfeil. Venligst prøv igjen.')
        // }