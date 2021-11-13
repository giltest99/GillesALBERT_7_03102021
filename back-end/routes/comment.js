const express = require('express');
const router = express.Router();

// Middlewares


/* 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 
*/

// Controller
const commentCtrl = require('../controllers/comment');

// End points
router.get('/', commentCtrl.selectAllComments);
router.get('/:id', commentCtrl.selectCommentById);
//router.post('/:id', commentCtrl.createComment);
//router.delete('/:id', commentCtrl.deleteComment);
//router.put('/:id', commentCtrl.modifyComment);



module.exports = router;