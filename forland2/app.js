const express = require("express");
const app = express();

const Database = require("better-sqlite3");
const db = new Database("Forland_database.db");

const PORT = 3000;

// Eksempel på rute som hentar brukarar frå databasen (besøk http://localhost:3000/personer)
app.get("/Bruker", (req, res) => {
    const users = db.prepare("SELECT * FROM Bruker").all();
    res.json(users);
});

// Eksempel på rute som hentar bilar frå databasen (besøk http://localhost:3000/biler)
app.get("/Jobb", (req, res) => {
    const cars = db.prepare("SELECT * FROM Jobb").all();
    res.json(cars);
});

app.listen(PORT, () => {
    console.log(`Server køyrer: http://localhost:${PORT}`);
});
