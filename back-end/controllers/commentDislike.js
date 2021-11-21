const Models = require('../models');
const sequelize = require('sequelize');

// Like a comment
exports.createCommentDislike = (req, res) => {

    const commentDislike = new Models.Comment_dislike(
        {
            user_id: req.body.user_id,
            comment_id: req.body.comment_id
        }
    )
    commentDislike.save()
        .then(commentDislike => res.status(201).json({ commentDislike, log: 'Comment disliké' }))
        .catch(error => res.status(400).json({ error : 'Comment non disliké'}));
}

// Delete disliked post
exports.deleteCommentDislike = (req, res) => {
    Models.Comment_dislike.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Comment dislike supprimé' }))
        .catch(error => res.status(400).json({ error : 'Comment dislike non supprimé'}));
}

