const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello How are you  Welcome to my  Evelyn Montiel World!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
