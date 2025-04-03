// app.js (server side)

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS and client-side JS)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // For demonstration purposes, log the form data
    console.log(`Navn: ${name}, E-post: ${email}, Melding: ${message}`);

    // Send a success response
    res.status(200).send('Form data received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});