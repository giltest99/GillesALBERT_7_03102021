const express = require("express");
const router = express.Router();

// Middlewares
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Controller
const postCtrl = require("../controllers/post");

// Endpoints
router.get("/", auth, postCtrl.selectAllPosts);
router.get("/:id", auth, postCtrl.selectPostById);
router.post("/", auth, multer, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.put("/:id", auth, multer, postCtrl.updatePost);

module.exports = router;
