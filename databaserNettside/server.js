const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;

    if (navn && epost && telefon && beskjed) {
        // hvis alle er fylt, får vi suksess
        return res.status(200).json({ message: 'Data sendt inn!'});
    } else {
        //Lar bruker vite hva de glømte å fylle inn:
        let missingFields = [];
        if (!navn) missingFields.push('navn');
        if (!epost) missingFields.push('epost');
        if (!telefon) missingFields.push('telefon');
        if (!beskjed) missingFields.push('beskjed');

        return res.status(400).json({ message: `Oppsto en feil. Følgende felter mangler: ${missingFields.join(', ')}` });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});