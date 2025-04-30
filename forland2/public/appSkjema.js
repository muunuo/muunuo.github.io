// deler av kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 

let popup = document.getElementById("loggInnPopup"); // ruten som du bruker til å logge inn

let loggInn = document.getElementById("loggInnKnapp");// logg inn knapp
let neiLoggInn = document.getElementById("neiTilInnlogging");// takke nei til logg inn knapp


loggInn.addEventListener("click", duLoggerInn);// logg inn knappen på toppen av siden
neiLoggInn.addEventListener("click", nei); // nei knappen på popupen

popup.style.display ="none" // popup er ikke synelig når du åpener siden

let spurtOmLogo=false; // med denne så stopper vi dataen fra skjema fra å bli lagret før etter du har/har hatt muligheten til å sitte opp en konto
// Planen var å knytte konto og skjema sammen, så konto måtte skje først, men grunnet at det var valgfritt så gjorde jeg så 
// dumåtte ha sjangsen til å si ja, om dugjorde det var opp til bruker.

function duLoggerInn() {
    popup.style.display="block"// popup blir synelig
}

function nei() {
        popup.style.display="none" // popup usynelig
        spurtOmLogo = true; // du har no fått sjangsen til å logge inn, og kan dermed levere skjema
}

document.addEventListener('DOMContentLoaded', () => {// svare på skjema
    document.getElementById('svarPaSkjema').addEventListener('click', async (event) => { // no skal vi sette opp så dataen fra skjema kan sendes til databasen
        event.preventDefault(); // det sendes ikke automatisk inn

        // hva som sendes inn
        const navn = document.getElementById('navn').value;
        const bedriftNavn = document.getElementById('bedriftNavn').value;
        const epost = document.getElementById('epost').value;
        const telefon = document.getElementById('telefon').value;
        const beskjed = document.getElementById('beskjed').value;

        if (spurtOmLogo == true) {// logo er egentlig inlogging/konto, men ble skrevet litt fort så
            // skjema sendes kun inn om "spurtOmLogo" er "true"
            const data = { // hva som klargjøres for innsendeing
                navn,
                bedriftNavn,
                epost,
                telefon,
                beskjed
            };

            try{// den skal prøve å

                const response = await fetch('/submit',{ // se om de kan hente/sende /submit (skjemaet)
                    method: 'POST', // hvordan de hentes
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data) // hvordan de overføres
                });

                const result = await response.json();// de skal vente til de får svar
                if (response.ok) { // hvis de får svar gjør x
                    alert(result.message);
                } else {// hvis ikke gjør y
                    alert(result.message);
                }
            } catch (error) { // hvis det er en feil
                alert('Failed to submit survey.');
            }

        } else {
            popup.style.display = "block" // de over skjer hvis bruker har hatt sjangsen til å logge inn allerede. Hvis ikke blir de gitt sjangsen her
        }
    });
});


document.addEventListener('DOMContentLoaded', () => { // oprette en konto
    document.getElementById('opprettKonto').addEventListener('click', async () => {
        const brukernavn = document.getElementById('brukernavn').value;
        const epostKonto = document.getElementById('epostKonto').value;
        const passord = document.getElementById('passord').value;
        spurtOmLogo = true // så du kan levere skjema etter du logger inn (har ikke testet dette)
    });
});



















// under her er kode jeg ikke endte opp å bruke. 


        // koden under gjør at inloggingsfelte forsvinner når du har oprettet en konto
        // if (!brukernavn || !epostKonto || !passord) { // Denne kjekker om alle feltene er fuylt ut 
            
        // } else{
        //     spurtOmLogo=true;
        //     popup.style.display="none";
        // }


// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('surveyForm');
    
//     // Assume this condition determines whether the data should be sent
//     let shouldStoreData = false; // Change this based on your logic

//     form.addEventListener('submit', async (event) => {
//         event.preventDefault(); // Prevent the default form submission

//         // Update shouldStoreData based on your logic
//         // Example: shouldStoreData = someConditionFunction();

//         if (shouldStoreData) {
//             // Collect form data
//             const formData = new FormData(form);
//             const data = Object.fromEntries(formData.entries());

//             try {
//                 // Send data to the server using fetch
//                 const response = await fetch('/submit-survey', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(data)
//                 });

//                 const result = await response.json();
//                 if (response.ok) {
//                     alert(result.message); // Display success message
//                 } else {
//                     alert(result.message); // Display error message
//                 }
//             } catch (error) {
//                 console.error('Error submitting survey:', error);
//                 alert('Failed to submit survey.');
//             }
//         } else {
//             alert('Survey data not stored due to false condition.');
//         }
//     });
// });


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


        // let opprettKonto = document.getElementById("svarInnlogging");
// let neiInnlogging = document.getElementById("neiTilInnlogging");


// opprettKonto.addEventListener("click", opprett);
// neiInnlogging.addEventListener("click", nei);

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



// function svar() { // når svar knappen trykkes

    //     if (!navn || !epost || !telefon || !beskjed) { // Denne kjekker om alle feltene er fuylt ut 
    //         // hvis noen mangler
    //         console.log("mangler")
    //     } else{
    //         if (spurtOmLogo == true) {
    //             // du har ikke blitt spurt om du ønsker å logge inn
    //             document.addEventListener('DOMContentLoaded', () => {// svare på skjema
    //                 document.getElementById('svarPaSkjema').addEventListener('click', async () => {
    //                     const navn = document.getElementById('navn').value;
    //                     const bedriftNavn = document.getElementById('bedriftNavn').value;
    //                     const epost = document.getElementById('epost').value;
    //                     const telefon = document.getElementById('telefon').value;
    //                     const beskjed = document.getElementById('beskjed').value;
                
    //                     // popup.style.display="block" // når bruker svarer får de popupen for å kunne logge inn
    //                 });
    //             });
    //         } else {
    //             popup.style.display ="block"
    //         }
    //     }
    
    
    //     // if (spurtOmLogo == true) {
    //     //     // du har ikke blitt spurt om du ønsker å logge inn
    //     //     document.addEventListener('DOMContentLoaded', () => {// svare på skjema
    //     //         document.getElementById('svarPaSkjema').addEventListener('click', async () => {
    //     //             const navn = document.getElementById('navn').value;
    //     //             const bedriftNavn = document.getElementById('bedriftNavn').value;
    //     //             const epost = document.getElementById('epost').value;
    //     //             const telefon = document.getElementById('telefon').value;
    //     //             const beskjed = document.getElementById('beskjed').value;
            
    //     //             // popup.style.display="block" // når bruker svarer får de popupen for å kunne logge inn
    //     //         });
    //     //     });
    //     // } else {
    //     //     popup.style.display ="block"
    //     // }
    // }