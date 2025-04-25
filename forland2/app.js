// kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const path = require('path'); 

const db = new Database("Forland_db_3.db");

const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


// Middleware for å parse JSON data
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())

//hvis det ikke allerede eksisterer opprettes tabellen
db.prepare(`
    CREATE TABLE IF NOT EXISTS kunde (
        id_kunde INTEGER PRIMARY KEY AUTOINCREMENT,
        navn TEXT NOT NULL,
        bedriftNavn TEXT NULL,
        epost TEXT NOT NULL,
        telefon TEXT NULL,
        beskjed TEXT NOT NULL
    )
`).run();

// Serve HTML-skjemaet fra en egen HTML-fil
app.get('/', (req, res) => { // hent filene under
    res.sendFile(__dirname, 'public', 'index.html');
});

// hånterer skjema innsending
app.post('/submit', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;

    // if (!navn || !epost || !beskjed || !telefon) { // Denne kjekker om alle feltene er fuylt ut 

    //     return res(400).send({ message: 'Venligst fyll ut alle obligatoriske felt.'});
    // }

    // console.log(insert);
    // console.log(res.ok);
    
    try {
        // Lagre data i databasen
        const insert = db.prepare('INSERT INTO kunde (navn, bedriftNavn, epost, telefon, beskjed) VALUES (?, ?, ?, ?, ?)');
        insert.run(navn, bedriftNavn, epost, telefon, beskjed);

        console.log('Svar sendt inn!');
        // Send en respons til klienten
        res.status(200).send({ message: 'Data ble lagret vellykket!' });
    } catch (error) {
        console.error('Feil ved innsending:', error.message);
        // Send en feilmelding til klienten
        res.status(500).send({ message: 'En feil oppstod ved lagring av data.' });
    }

});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});


// app.post('/submit', (req, res) => {
//     const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;

//     if (navn && epost && telefon && beskjed) {
//         // hvis alle er fylt, får vi suksess
//         return res.status(200).json({ message: 'Data sendt inn!'});
//     } else {
//         //Lar bruker vite hva de glømte å fylle inn:
//         let missingFields = [];
//         if (!navn) missingFields.push('navn');
//         if (!epost) missingFields.push('epost');
//         if (!telefon) missingFields.push('telefon');
//         if (!beskjed) missingFields.push('beskjed');

//         return res.status(400).json({ message: `Oppsto en feil. Følgende felter mangler: ${missingFields.join(', ')}` });
//     }
// });
