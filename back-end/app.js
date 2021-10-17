// Modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const path = require('path');
//const { Sequelize} = require('sequelize');

// Define Express app
const app = express();

// Database connect
const db = require('./models/index');
db.sequelize
    .authenticate()
    .then(() => {
        console.log('DB connect successfull !');
    })
    .catch(() => {
        console.log('DB connect failed !');
    });

// Routes import
/*
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const likeRoutes = require("./routes/like");
*/

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
/*
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
*/

// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;