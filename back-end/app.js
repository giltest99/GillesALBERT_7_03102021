// Modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const path = require('path');


// Routes import



// Database connect


// Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Middlewares
app.use(helmet());
app.use(express.json());


// Routes
app.use('/images', express.static(path.join(__dirname, 'images')));


// Static files



module.exports = app;