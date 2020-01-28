const express = require('express');
router = express.Router();

//---------
// ROUTES
//---------
router.get('/', (req, res) => {
  res.send(index.html);
});

router.get('/weather', (req, res) => {
  res.send('WEATHER');
});

module.exports = router;
