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
    title: 'About',
    name: 'Brandon Kennedy'
  });
});

router.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Brandon Kennedy'
  });
});

router.get('/weather', (req, res) => {
  res.send('WEATHER');
});

router.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    error: 'Help article not found',
    name: 'Brandon Kennedy'
  });
});

router.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    error: 'Page not found.',
    name: 'Brandon Kennedy'
  });
});

module.exports = router;
