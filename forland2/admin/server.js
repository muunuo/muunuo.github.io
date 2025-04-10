const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/submit-servey', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;

    if (navn && bedriftNavn && epost && telefon && beskjed) {
        // hvis alle er fylt, får vi suksess
        return res.status(200).json({ message: 'Data sendt inn!'});
    } else {
        return res.status(400).json({ message: 'oppsto en Feil'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});