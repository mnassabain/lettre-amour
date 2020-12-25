const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

const hostname = '0.0.0.0';
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

// capitalize first letter of word
let capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// read file
let rawData = fs.readFileSync('phrases.json');
let phrases = JSON.parse(rawData);

// base route
app.get('/:name?', (req, res) => {
    // pick random phrase
    let phrase = randomItem(phrases);
    let name = req.params.name;
    if (!name) {
      name = 'Mon amour,';
    } else {
      name = capitalize(name) + ','
    }

    // render page with phrase
    res.render('letter', { title: name, message: phrase });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});