const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.json());

// Serving static files
const filePath = path.join(__dirname, '../client/dist');
const serveStatic = express.static(filePath);
app.use(serveStatic);

// Connection to mySQL
const db = require('../database');

// Setting the port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
// Vendor post request
const vendor = require('./vendorPost.js');
app.post('/purchases', vendor.postAPurchase);

const getPurchases = require('./getPurchases.js');
app.get('/purchases', getPurchases.getAllPurchases);