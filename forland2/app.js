// kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 
// en grunnlegende database 
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');

const db = new Database("Forland_database.db");

const app = express();
const port = 3000;

app.use(express.static('public'));

// Middleware for å parse JSON data
app.use(bodyParser.urlencoded({ extended:true}));

// Opprett tabellen hvis den ikke allerede finnes
// db.prepare(`
//     CREATE TABLE IF NOT EXISTING responses (
//     id INEGER PRIMARY KEY AUTOINCREMENT,
//     navn TEXT NOT NULL
//     navn TEXT NOT NULL
//     )
// `).run();

// Serve HTML-skjemaet fra en egen HTML-fil
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/skjema.html');
});

// hånterer skjema innsending
app.post('/submit', (req, res) => {
    const { navn, email } = req.body;

    //lagre data i databasen
    const insert = db.prepare('INSERT INTO test (navn, email) VALUES (?, ?)');
    insert.run(navn, email);

});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});