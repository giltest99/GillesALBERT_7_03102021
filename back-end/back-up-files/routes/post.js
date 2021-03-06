const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

// Controller
const postCtrl = require('../controllers/post');

// Endpoints
router.get('/', postCtrl.selectAllPosts);
router.get('/:id', postCtrl.selectPostById);
router.post('/', multer, postCtrl.createPost);
router.delete('/:id', postCtrl.deletePost);
router.put('/:id', multer, postCtrl.updatePost);


module.exports = router;