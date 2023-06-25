const express = require('express');
const app = express();
const ApiComponent = require('../src/components/apiComponent');

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Node JS api');
});

app.use('/api', ApiComponent); // Usar el componente en la ruta '/api'

module.exports = app;
