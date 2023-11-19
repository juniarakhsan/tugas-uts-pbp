const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Route for '/'
app.get('/', (req, res) => {
  res.status(200).send("Ini adalah halaman Beranda");
});

// Route for '/about'
app.get('/about', (req, res) => {
  res.status(200).send("Ini Tentang Saya");
});

// Generic route for any other URL
app.all('*', (req, res) => {
  res.status(404).send("Halaman tidak ditemukan");
});

// Middleware to handle unsupported methods
app.use((req, res) => {
  res.status(400).send("Halaman tidak dapat diakses dengan method tersebut");
});

module.exports = app;
