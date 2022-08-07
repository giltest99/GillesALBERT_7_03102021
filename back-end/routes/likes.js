const express = require("express");
const router = express.Router();

// Middlewares
//const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');

// Controller
const postLikeCtrl = require("../controllers/like");

// Endpoints

router.get("/", postLikeCtrl.selectAllLikes);
router.post("/", postLikeCtrl.createPostLike);
router.delete("/:id", postLikeCtrl.deletePostLike);
router.get("/:postid", postLikeCtrl.postLikeCount);
router.get("/user/:userid", postLikeCtrl.postLikeByUserId);

router.get("/details/:userid", postLikeCtrl.postLikedDetailByUserId);

module.exports = router;
