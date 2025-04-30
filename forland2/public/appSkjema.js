let popup = document.getElementById("loggInnPopup"); // ruten som du bruker til å logge inn

let loggInn = document.getElementById("loggInnKnapp");// logg inn knapp
let neiLoggInn = document.getElementById("neiTilInnlogging");// takke nei til logg inn knapp


loggInn.addEventListener("click", duLoggerInn);
neiLoggInn.addEventListener("click", nei);

popup.style.display ="none"

let svarSkjema = document.getElementById("svarPaSkjema");// svar knapp under skjemaet


svarSkjema.addEventListener("click", svar);

function duLoggerInn() {
    popup.style.display="block"
}

function nei() {
        popup.style.display="none"
        spurtOmLogo=true;
}

let spurtOmLogo=true;

document.addEventListener('DOMContentLoaded', () => {// svare på skjema
    document.getElementById('svarPaSkjema').addEventListener('click', async (event) => {
        event.preventDefault();

        const navn = document.getElementById('navn').value;
        const bedriftNavn = document.getElementById('bedriftNavn').value;
        const epost = document.getElementById('epost').value;
        const telefon = document.getElementById('telefon').value;
        const beskjed = document.getElementById('beskjed').value;

        if (spurtOmLogo == true) {
            const data = {
                navn,
                bedriftNavn,
                epost,
                telefon,
                beskjed
            };

            try{

                const response = await fetch('/submit-servey',{
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message);
                } else {
                    alert(result.message);
                }
            } catch (error) {
                alert('Failed to submit survey.');
            }

        } else {
            alert('Survey data not stored due to false condition.');
        }

        // popup.style.display="block" // når bruker svarer får de popupen for å kunne logge inn
    });
});


document.addEventListener('DOMContentLoaded', () => { // oprette en konto
    document.getElementById('opprettKonto').addEventListener('click', async () => {
        const brukernavn = document.getElementById('brukernavn').value;
        const epostKonto = document.getElementById('epostKonto').value;
        // const kunde_id = document.getElementById('kunde_id').value; //usikker på om dette er noe jeg kommer til å trenge eller ikke
        const passord = document.getElementById('passord').value;

        // koden under gjør at inloggingsfelte forsvinner når du har oprettet en konto
        // if (!brukernavn || !epostKonto || !passord) { // Denne kjekker om alle feltene er fuylt ut 
            
        // } else{
        //     spurtOmLogo=true;
        //     popup.style.display="none";
        // }
    });
});



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