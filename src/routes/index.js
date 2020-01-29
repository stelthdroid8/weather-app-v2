const express = require('express');
router = express.Router();

//---------
// ROUTES
//---------
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Brandon Kennedy'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

router.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help'
  });
});

router.get('/weather', (req, res) => {
  res.send('WEATHER');
});

module.exports = router;
