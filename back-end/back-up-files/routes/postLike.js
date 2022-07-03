const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config'); 

// Controller
const postLikeCtrl = require('../controllers/postLike');

// Endpoints
router.get('/:id', postLikeCtrl.postLikeCount);
router.post('/', postLikeCtrl.createPostLike);
router.delete('/:id', postLikeCtrl.deletePostLike);

//router.get('/', postLikeCtrl.selectAllPostLikes);
//router.get('/:id', postLikeCtrl.selectPostLikeById);


module.exports = router;