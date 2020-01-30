const express = require('express');
const forecast = require('../utils/forecast');
const geocode = require('../utils/geocode');

router = express.Router();

//---------
// ROUTES
//---------
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
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
  if (!req.query.address) {
    return res.send({ error: 'You must provide an address' });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        });
      });
    }
  );
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
