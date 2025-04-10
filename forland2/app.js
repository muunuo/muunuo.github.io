// kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 
// en grunnlegende database 
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const path = require('path'); //x

const db = new Database("Forland_db_3.db");

const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


// Middleware for å parse JSON data
app.use(bodyParser.urlencoded({ extended:true }));

// db.prepare(`
//     CREATE TABLE IF NOT EXISTS kunde_1 (
//         id_kunde INTEGER PRIMARY KEY AUTOINCREMENT,
//         navn TEXT NOT NULL,
//         epost TEXT NOT NULL
//         telefon INTEGER NULL
//         beskjed TEXT NOT NULL
//     )
// `).run();

// Serve HTML-skjemaet fra en egen HTML-fil
app.get('/', (req, res) => {
    res.sendFile(__dirname, 'public', 'index.html', 'appSkjema.js');
});

// hånterer skjema innsending
app.post('/submit', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;

    //lagre data i databasen
    const insert = db.prepare('INSERT INTO kunde (navn, bedriftNavn, epost, telefon, beskjed) VALUES (?, ?, ?, ?, ?)');
    insert.run(navn, bedriftNavn, epost, telefon, beskjed);

});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
//   });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });
// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Example route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });