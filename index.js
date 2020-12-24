const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;

// for file reading
const fs = require('fs');

// select random item from array
let randomItem = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// home route
app.get('/', (req, res) => {
    // pick random phrase
    let rawData = fs.readFileSync('phrases.json');
    let phrases = JSON.parse(rawData);
    let phrase = randomItem(phrases);

    // send phrase
    res.send(phrase);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});