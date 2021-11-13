const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config'); 

// Controller
const commentDislikeCtrl = require('../controllers/commentDislike');

// Endpoints
//router.get('/', commentDislikeCtrl.selectAllCommentDislikes);
//router.get('/:id', commentDislikeCtrl.selectCommentDislikeById);
//router.post('/', commentDislikeCtrl.createCommentDislike);
//router.delete('/:id', commentDislikeCtrl.deleteCommentDislike);

module.exports = router;