document.getElementById('svarPaSkjema').addEventListener('click', async () => {
    const navn = document.getElementById('navn').value;
    const email = document.getElementById('email').value;

    const responses = await fetch('/submit-survey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/jason'
        },
        body: JSON.stringify({ navn, email })
    });

    if (responses.ok) {
        alert ('Svar sendt inn!');

    } else {
        alert('Feil ved innsending');
    }

document.getElementById('navn').value = '';
document.getElementById('email').value = '';

});