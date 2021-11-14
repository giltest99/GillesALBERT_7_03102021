const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config'); 

// Controller
const commentDislikeCtrl = require('../controllers/commentDislike');

// Endpoints
router.post('/', commentDislikeCtrl.createCommentDislike);
router.delete('/:id', commentDislikeCtrl.deleteCommentDislike);

//router.get('/', commentLikeCtrl.selectAllCommentLikes);
//router.get('/:id', commentLikeCtrl.selectCommentLikeById);

module.exports = router;