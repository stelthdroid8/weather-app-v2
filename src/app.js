require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

//---------
// ROUTES
//---------
app.get('/', (req, res) => {
  res.send('ROOT');
});

app.get('/help', (req, res) => {
  res.send('HELP PAGE');
});

app.get('/about', (req, res) => {
  res.send('ABOUT');
});

app.get('/weather', (req, res) => {
  res.send('WEATHER');
});

//express configuration
app.listen(port, () => {
  console.log('up on port: ', port);
});
