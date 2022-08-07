const Models = require('../models');
const sequelize = require('sequelize');

// Like a post
exports.createPostLike = (req, res) => {

    const postLike = new Models.Post_like(
        {
            user_id: req.body.user_id,
            post_id: req.body.post_id
        }
    )
    postLike.save()
        .then(like => res.status(201).json({ postLike, log: 'Post liké' }))
        .catch(error => res.status(400).json({ error : 'Post non liké'}));
}

// Delete liked post
exports.deletePostLike = (req, res) => {
    Models.Post_like.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Post like supprimé' }))
        .catch(error => res.status(400).json({ error : 'Post like non supprimé'}));
}

// Count liked posts
exports.postLikeCount = (req, res) => {
    Models.Post_like.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'NumberOfLikedPosts']],
        where: { id: req.params.id }
      })
        .then(nb => res.status(200).json(nb))
        .catch(error => res.status(500).json({ error }));
}
