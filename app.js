'use strict';

console.clear();

const express = require('express');
const hbs = require('hbs');

const { PORT } = require('./config');
const { notFoundMiddleware } = require('./middlewares');
const {
  homeRoute,
  genericRoute,
  elementsRoute,
  userRoute,
} = require('./routes');

const app = express();

// // Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// // Middleware
app.use(express.static('public'));

// // Routes
app.use('/', homeRoute);
app.use('/', genericRoute);
app.use('/', elementsRoute);
app.use('/', userRoute);

app.use(notFoundMiddleware);


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
