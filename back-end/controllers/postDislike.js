const Models = require('../models');
const sequelize = require('sequelize');

// Dislike a post
exports.createPostDislike = (req, res) => {

    const postDislike = new Models.Post_dislike(
        {
            user_id: req.body.user_id,
            post_id: req.body.post_id
        }
    )
    postDislike.save()
        .then(postDislike => res.status(201).json({ postDislike, log: 'Post disliké' }))
        .catch(error => res.status(400).json({ error : 'Post non disliké'}));
}

// Delete disliked post
exports.deletePostDislike = (req, res) => {
    Models.Post_dislike.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Post dislike supprimé' }))
        .catch(error => res.status(400).json({ error : 'Post dislike non supprimé'}));
}

// Count disliked posts
exports.postDislikeCount = (req, res) => {
    Models.Post_dislike.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('post_id')), 'NumberOfDislikedPosts']]
      })
        .then(nb => res.status(200).json(nb))
        .catch(error => res.status(500).json({ error }));
}