const Models = require("../models");
const sequelize = require("sequelize");

// Select all liked posts
exports.selectAllLikes = (req, res) => {
  Models.Like.findAll({
    attributes: ["id", "user_id", "post_id"],
  })
    .then((likes) => res.status(200).json(likes))
    .catch(() => res.status(500).json({ error: "Pas de like trouvé" }));
};

// Like a post
exports.createPostLike = (req, res) => {
  Models.Like.create({
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  })
    .then(() => res.status(201).json({ message: "Post liké" }))
    .catch((error) => res.status(400).json({ error: "Post non liké" }));
};

// Delete liked post
exports.deletePostLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ log: "Post like supprimé" }))
    .catch((error) =>
      res.status(400).json({ error: "Post like non supprimé" })
    );
};

// Count liked posts
exports.postLikeCount = (req, res) => {
  Models.Like.findAll({
    attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "Likes"]],
    where: { post_id: req.params.postid },
  })
    .then((nb) => res.status(200).json(nb))
    .catch((error) => res.status(500).json({ msg: "Oups..." }));
};

// Count liked posts by user
exports.postLikeByUserId = (req, res) => {
  Models.Like.findAll({
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("id")), "Likes by user id"],
    ],
    where: { user_id: req.params.userid },
  })
    .then((nb) => res.status(200).json(nb))
    .catch((error) => res.status(500).json({ message: error }));
};

exports.postLikedDetailByUserId = (req, res) => {
  Models.Like.findAll({
    attributes: ["user_id", "post_id"],
    where: { user_id: req.params.userid },
  })
    .then((details) => res.status(200).json(details))
    .catch((error) => res.status(500).json({ message: error }));
};
