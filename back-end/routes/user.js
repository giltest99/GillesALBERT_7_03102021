const express = require("express");
const router = express.Router();

// Middlewares
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Controller
const userCtrl = require("../controllers/user");

// Endpoints
router.get("/", auth, userCtrl.selectAllUsers);
router.get("/:id", auth, userCtrl.selectUserById);

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/:id", auth, userCtrl.deleteUser);
router.put("/:id", auth, multer, userCtrl.updateUser);

//router.get('/username/:username', userCtrl.selectUserByUserName);
router.get("/:email", auth, userCtrl.selectUserByUserEmail);

module.exports = router;
