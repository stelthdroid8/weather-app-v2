require('dotenv').config();

const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index');

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(publicDir));

app.use(indexRoutes);
//---------------------
//express configuration
app.listen(port, () => {
  console.log('up on port: ', port);
});
