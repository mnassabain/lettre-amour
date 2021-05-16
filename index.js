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

// select random index from array
let randomIndex = function(array) {
  return Math.floor(Math.random() * array.length);
} 

// capitalize first letter of word
let capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// read file
let rawData = fs.readFileSync('phrases.json');
let phrases = JSON.parse(rawData);

// Share URL
app.get('/share/:messageId/:name?', (req, res) => {
  const messageId = req.params.messageId;
  const message = phrases[messageId];

  let name = req.params.name;
  if (!name) {
    name = 'Mon amour,';
  } else {
    name = `${capitalize(name)},`;
  }

  // Share url = current url
  const shareUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  
  // render page with phrase
  res.render('letter', {
    title: name,
    message,
    shareUrl, 
  });
})

// base route
app.get('/:name?', (req, res) => {
  const baseUrl = req.protocol + '://' + req.get('host');

  // pick random phrase
  const messageId = randomIndex(phrases);
  const message = phrases[messageId];

  let name = req.params.name;
  if (!name) {
    name = 'Mon amour,';
  } else {
    name = `${capitalize(name)},`;
  }

  // Get shareUrl of page
  const shareName = req.params.name ? req.params.name : '';
  const shareUrl = `${baseUrl}/share/${messageId}/${shareName}`;

  // render page with phrase
  res.render('letter', {
    title: name,
    message,
    shareUrl,
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});