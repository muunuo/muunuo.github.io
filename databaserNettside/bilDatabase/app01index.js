// Video med forklaring: https://youtu.be/1ZQJZv1zv1Y

//grunleggende database (med litt ekstra)

//1 = vidio 1 enkel/grunnleggende server
//2 = vidio 2 Mer kompliserte stier/spøringer

const express = require("express"); //1 express er et bibliotek vi bruker for å lage serveren våres 
const app = express(); //1

const Database = require("better-sqlite3"); //1 bruker biblioteket for å koble til databasen
const db = new Database("bil.db"); //1 kobler til den fysiske databasen

const PORT = 3000; //1 hva port vi bruker (80 er vanlig)

app.use(express.static('public')) //-

const cors = require("cors"); //-
app.use(cors()); //tilater alle forespørsler

// Eksempel på rute som hentar brukarar frå databasen (besøk http://localhost:3000/personer)
app.get("/personer", (req, res) => { //1 henter faktisk ting fra databasen
    const users = db.prepare("SELECT * FROM person").all();
    res.json(users);
});

// Eksempel på rute som hentar bilar frå databasen (besøk http://localhost:3000/biler)
app.get("/biler", (req, res) => { //2
    const cars = db.prepare("SELECT * FROM bil").all();
    res.json(cars);
});

app.listen(PORT, () => { //1 Hva port vi bruker
    console.log(`Server køyrer: http://localhost:${PORT}`);
});