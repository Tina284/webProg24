// Učitavanje Express modula
const express = require('express');
// Inicijalizacija Express aplikacije
const app = express();
const path = require('path');

app.use(express.static( path.join(__dirname, "public")));

// Definicija ruta
app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(path.join(__dirname, "/public/express.png"));
});

// Pokretanje servera
const port = 3000;
app.listen(port, () => {
    console.log(`Server je pokrenut na http://localhost:${port}`);
});
