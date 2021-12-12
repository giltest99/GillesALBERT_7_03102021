const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

// Controller
const userCtrl = require('../controllers/user');

// Endpoints
router.get('/', userCtrl.selectAllUsers);
router.get('/id/:id', userCtrl.selectUserById);

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', multer, userCtrl.updateUser);

//router.get('/username/:username', userCtrl.selectUserByUserName);
//router.get('/email/:email', userCtrl.selectUserByUserEmail);

module.exports = router;