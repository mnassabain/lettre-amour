const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

// for file reading
const fs = require('fs');

// mustache-express
var mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

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

    // render page with phrase
    res.render('letter', { message: phrase });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});