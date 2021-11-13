const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config'); 

// Controller
const commentLikeCtrl = require('../controllers/commentLike');

// Endpoints
//router.get('/', commentLikeCtrl.selectAllCommentLikes);
//router.get('/:id', commentLikeCtrl.selectCommentLikeById);
//router.post('/', commentLikeCtrl.createCommentLike);
//router.delete('/:id', commentLikeCtrl.deleteCommentLike);

module.exports = router;