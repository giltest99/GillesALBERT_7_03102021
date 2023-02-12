const express = require("express");
const router = express.Router();

// Middlewares
const auth = require("../middleware/auth");

// Controller
const postLikeCtrl = require("../controllers/like");

// Endpoints

router.get("/", auth, postLikeCtrl.selectAllLikes);
router.post("/", auth, postLikeCtrl.createPostLike);
router.delete("/:id", auth, postLikeCtrl.deletePostLike);
router.get("/:postid", auth, postLikeCtrl.postLikeCount);

/* router.get("/user/:userid", postLikeCtrl.postLikeByUserId);
router.get("/details/:userid", postLikeCtrl.postLikedDetailByUserId); */

module.exports = router;
