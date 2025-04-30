// kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const path = require('path'); 

const session = require("express-session")
const bcrypt = require("bcrypt");  

const db = new Database("Forland_db_3.db");

const app = express();
const port = 3000;

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

// Middleware for å parse JSON data
// app.use(express.json)

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())

app.use(// brukes for en beskyttet rute
    session({
        secret: "hemmeligNøkkel", // Bytt til en sikker nøkkel i produksjon
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Sett til true hvis du bruker HTTPS
    })
);

function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) {
        return res.redirect("/loggInn.html");
    }
    next();
}

app.post("/login", async (req, res) => {
    const { brukernavn, passord } = req.body;

    const bruker = db.prepare("SELECT * FROM person WHERE brukernavn = ?").get(brukernavn);
    if (!bruker) {
        return res.status(401).json({ message: "Feil fornavn eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(passord, bruker.passord);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil brukernavn eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.id, brukernavn: bruker.brukernavn };
    res.json({ message: "Innlogging vellykket" });
});

// Rute for å logge ut
app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});

// Eksempel på en beskyttet rute
app.get("/beskyttet", kreverInnlogging, (req, res) => {
    res.send(`Velkommen, ${req.session.bruker.fornavn}! Dette er en beskyttet side.`);
});

// // Rute for å vise leggtilbil.html (kun for innloggede brukere)
// app.get("/registrerbil", kreverInnlogging, (req, res) => {
//     res.sendFile(__dirname + "/beskytta/leggtilbil.html");
// });







//hvis det ikke allerede eksisterer opprettes tabellen
db.prepare(`
    CREATE TABLE IF NOT EXISTS kunde (
        id_kunde INTEGER PRIMARY KEY AUTOINCREMENT,
        navn TEXT NOT NULL,
        bedriftNavn TEXT NULL,
        epost TEXT NOT NULL,
        telefon TEXT NOT NULL,
        beskjed TEXT NOT NULL
    );
`).run();

// db.prepare(`
//     CREATE TABLE IF NOT EXISTS bruker (
//         brukernavn TEXT PRIMARY KEY,
//         id_kunde INTEGER NOT NULL,
//         passord TEXT NOT NULL,
//         FOREIGN KEY (id_kunde) REFERENCES kunde(id_kunde)
//     );
// `).run();

// Serve HTML-skjemaet fra en egen HTML-fil
app.get('/', (req, res) => { // hent filene under
    res.sendFile(__dirname, 'public', 'index.html', 'loggInn.html');
});

// hånterer skjema innsending
app.post('/submit', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;
    
    try {
        // Lagre data i databasen
        const insert = db.prepare('INSERT INTO kunde (navn, bedriftNavn, epost, telefon, beskjed) VALUES (?, ?, ?, ?, ?)');
        insert.run(navn, bedriftNavn, epost, telefon, beskjed);

        console.log('Svar sendt inn!');
        // Send en respons til klienten
        // res.status(200).send({ message: 'Data ble lagret vellykket!' });
    } catch (error) {
        console.error('Feil ved innsending:', error.message);
        // Send en feilmelding til klienten
        // res.status(500).send({ message: 'En feil oppstod ved lagring av data.' });
    }

});


app.post("/leggtilperson", async (req, res) => {
    const {brukernavn, epostKonto, passord} = req.body;

    //hash passord med bcript
    const saltRounds = 10; // stander antall runder med hashing
    const hashPassord = await bcrypt.hash(passord, saltRounds);

    const stmt = db.prepare("INSERT INTO bruker (brukernavn, epostKonto, passord) VALUES (?,?,?)");
    const info = stmt.run(brukernavn, epostKonto, hashPassord);

    res.json({ message: "Ny person lagt til", info})
    
})




// app.post('/submitPassord', (req, res) => {
//     const {brukernavn, id_kunde, passord} = req.body;

//     try {
//         // Lagre data i databasen
//         const insert = db.prepare('INSERT INTO bruker (brukernavn, id_kunde, passord) VALUES (?, ?, ?)');
//         insert.run(brukernavn, id_kunde, passord);

//         console.log('Svar sendt inn passord!');
//         // Send en respons til klienten
//         // res.status(200).send({ message: 'Data ble lagret vellykket!' });
//     } catch (error) {
//         console.error('Feil ved innsending:', error.message);
//         // Send en feilmelding til klienten
//         // res.status(500).send({ message: 'En feil oppstod ved lagring av data.' });
//     }

// });


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






    // console.log(insert);
    // console.log(res.ok);