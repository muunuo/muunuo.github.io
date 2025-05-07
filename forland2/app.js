// deler av kode under var lagt med hjelp av Ai, endringer gjordt for å bedre fungere for det jeg trengte det for. 

// ting vi måtte instalere for at dette skulle fungere. 
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const path = require('path'); 

const session = require("express-session")
const bcrypt = require("bcrypt");  

const db = new Database("Forland_db_3.db");

// hvor nettsiden skal være
const app = express();
const port = 3000;

// vi må ha tilgang til public
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended:true })); // jeg vet ikke hvorfor. Men jeg må bruke denne middlewareen, ellers kræsjer alt.
// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use( // for inlogging
    session({
        secret: "hemmeligNøkkel", // Bytt til en sikker nøkkel i produksjon
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Sett til true hvis du bruker HTTPS
    })
);

function kreverInnlogging(req, res, next) { // logginn
    if (!req.session.bruker) {
        return res.redirect("/login.html");
    }
    next();
}

app.post("/login", async (req, res) => {
    const { brukernavn, passord } = req.body;

    const bruker = db.prepare("SELECT * FROM bruker WHERE brukernavn = ?").get(brukernavn);
    if (!bruker) {
        return res.status(401).json({ message: "Feil brukernavn eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(passord, bruker.passord);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil brukernavn eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.id_konto, brukernavn: bruker.brukernavn };
    res.json({ message: "Innlogging vellykket" });
});

app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});

// Eksempel på en beskyttet rute
app.get("/beskyttet", kreverInnlogging, (req, res) => {
    res.send(`Velkommen, ${req.session.bruker.brukernavn}! Dette er en beskyttet side.`);
});
// res.sendFile(`Velkommen, ${req.session.bruker.brukernavn}! Dette er en beskyttet side.`);


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
// text er hva som skrives inn, not null betyr at det ikke kan være tomt

// !! er ikke i jo bjøenar sin kode
app.get('/', (req, res) => { // koble til filene under (login er en av de filene som ikke endte opp å føre til suksess)
    res.sendFile(__dirname, 'public', 'index.html', 'loggInn.html');
});

// hånterer skjema innsending
app.post('/submit', (req, res) => {
    const { navn, bedriftNavn, epost, telefon, beskjed } = req.body;// hva som sendes inn
    
    try {// skal se om de klares å sendes inn 
        
        const insert = db.prepare('INSERT INTO kunde (navn, bedriftNavn, epost, telefon, beskjed) VALUES (?, ?, ?, ?, ?)'); // hvor det skal sendes til i databasen og mengden ting som sendes inn
        insert.run(navn, bedriftNavn, epost, telefon, beskjed); // igjen, hva som skal lagres

        console.log('Svar sendt inn!');
        // Send en respons til klienten
        // res.status(200).send({ message: 'Data ble lagret vellykket!' });
    } catch (error) { // hvis det ikke klarer å sendes inn
        console.error('Feil ved innsending:', error.message);
        // res.status(500).send({ message: 'En feil oppstod ved lagring av data.' });
    }

});


app.post("/leggtilperson", async (req, res) => {
    const {brukernavn, epostKonto, passord} = req.body;

    //hash passord med bcript
    const saltRounds = 10; // stander antall runder med hashing
    const hashPassord = await bcrypt.hash(passord, saltRounds); // hvordan de hashes

    const stmt = db.prepare("INSERT INTO bruker (brukernavn, epostKonto, passord) VALUES (?,?,?)"); // hvor det skal sendes til i databasen og mengden ting som sendes inn
    const info = stmt.run(brukernavn, epostKonto, hashPassord);

    res.json({ message: "Ny person lagt til", info})
    
})


app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});


//         app.use(express.static('public')) //

//         const cors = require("cors"); //
//         app.use(cors()); //tilater alle forespørsler

//     // Eksempel på rute som hentar brukarar frå databasen (besøk http://localhost:3000/personer)
//         app.get("/kunde", (req, res) => { 
//         const users = db.prepare("SELECT * FROM kunde").all();
//         res.json(users);
//         });


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