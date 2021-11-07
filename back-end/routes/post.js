const express = require('express');
const router = express.Router();

// Middlewares


/* 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 
*/

// Controller
const postCtrl = require('../controllers/post');

// End points
router.get('/', postCtrl.selectAllPosts);
router.get('/:id', postCtrl.selectPostById);

/* 
router.get('/:id', postCtrl.selectPostById);
router.post('/create', postCtrl.createPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);
 */


module.exports = router;