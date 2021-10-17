const express = require('express');
const router = express.Router();

// Middlewares
/* const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); */

// Controller
const userCtrl = require('../controllers/user');

// Endpoints
router.get('/', userCtrl.selectAllUsers);

/* 
router.get('/:id')
router.post('/login')
router.post('/subscribe')
router.put('/:id')
router.delete('/:id')
*/

module.exports = router;