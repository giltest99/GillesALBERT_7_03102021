// Modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const path = require('path');
const { Sequelize } = require('sequelize');

const app = express();

// Routes import
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const likeRoutes = require("./routes/like");


// Database connect




// Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);


// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;