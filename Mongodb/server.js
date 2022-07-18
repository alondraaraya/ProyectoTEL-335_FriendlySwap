// server.js
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const handlerError = require('./src/middleware/handleErrors'); // Midelware error

// Our DB Configuration
require('./src/config/database');

// Routes
const routes = require('./src/routes');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', (req, res) => {
    res.send("Hello World Api Rest! ");
});

app.use(handlerError);

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});