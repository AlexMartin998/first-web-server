const express = require('express');

const { PORT } = require('./config');
const { userRoute, homeRoute } = require('./routes');

const app = express();

// // Middleware
app.use(express.static('public'));

// // Routes
app.use('/', userRoute);
app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
