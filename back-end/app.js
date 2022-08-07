// Modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const path = require('path');

// Define Express app
const app = express();

// Database connect
const models = require('./models/index');
models.sequelize
    .authenticate()
    .then(() => {
        console.log('DB connect successfull !');
    })
    .catch(() => {
        console.log('DB connect failed !');
    });

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes import
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const postLikesRoutes = require('./routes/likes');

//const likes = require('./routes/likes')


// Routers
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/postlikes', postLikesRoutes);

//app.use('/api/likes',likes);

// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;