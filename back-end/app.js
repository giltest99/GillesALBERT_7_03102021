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
const models = require('./models/index');
models.sequelize
    .authenticate()
    .then(() => {
        console.log('DB connect successfull !');
    })
    .catch(() => {
        console.log('DB connect failed !');
    });

// Routes import
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require("./routes/comment");

/*
const postLikesRoutes = require('./routes/postLike');
const postDislikesRoutes = require('./routes/postDislike');
const commentLikesRoutes = require('./routes/commentLike');
const commentDislikesRoutes = require('./routes/commentDislike');
*/

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

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use("/api/comments", commentRoutes);

/*
app.use("/api/postlikes", postLikesRoutes);
app.use("/api/postdislikes", postDislikesRoutes);
app.use("/api/commentlikes", commentLikesRoutes);
app.use("/api/commentdislikes", commentDislikesRoutes);
*/

// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;