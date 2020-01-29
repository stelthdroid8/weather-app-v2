require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

//require in routes
const indexRoutes = require('./routes/index');

//set up port recognition
const port = process.env.PORT || 3000;

//define paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPathDir = path.join(__dirname, '../templates/views');
const partialDir = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPathDir);
hbs.registerPartials(partialDir);

//setup static directory to serve
app.use(express.static(publicDir));

//use routes
app.use(indexRoutes);

//---------------------
//express configuration
app.listen(port, () => {
  console.log('up on port: ', port);
});
