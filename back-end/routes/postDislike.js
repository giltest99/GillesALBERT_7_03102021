const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config'); 

// Controller
const postDislikeCtrl = require('../controllers/postDislike');

// Endpoints
//router.get('/', postDislikeCtrl.selectAllPostDislikes);
//router.get('/:id', postDislikeCtrl.selectPostLikeById);
//router.post('/', postDislikeCtrl.createPostDislike);
//router.delete('/:id', postDislikeCtrl.deletePostDislike);

module.exports = router;