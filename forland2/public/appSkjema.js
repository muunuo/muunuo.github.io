document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('svarPaSkjema').addEventListener('click', async () => {
        const navn = document.getElementById('navn').value;
        const bedriftNavn = document.getElementById('bedriftNavn').value;
        const epost = document.getElementById('epost').value;
        const telefon = document.getElementById('telefon').value;
        const beskjed = document.getElementById('beskjed').value;

        

        try{
            const responses = await fetch('http://localhost:3000/submit-survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ navn, bedriftNavn, epost, telefon, beskjed })
            });

            const result = await response.json

            if (responses.ok) {
                alert ('Svar sendt inn!');

                document.getElementById('navn').value = ''; // ved å flytte de inn her, så tømmes kun skjema hvis bruker sitt svar ble sendt inn
                document.getElementById('bedriftNavn').value = '';
                document.getElementById('epost').value = '';
                document.getElementById('telefon').value = '';
                document.getElementById('beskjed').value = '';
            } else {
                alert('Feil ved innsending');
            } 
        } catch (error) {
            //i tilfelle av enentuelle nettverkfeil
            console.error('Nettwork error', error);
            alert('Det oppsto en nettverksfeil. Venligst prøv igjen.')
        }
    });
});