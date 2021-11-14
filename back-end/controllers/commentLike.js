const Models = require('../models');

// Like a comment
exports.createCommentLike = (req, res) => {

    const commentLike = new Models.Comment_like(
        {
            user_id: req.body.user_id,
            comment_id: req.body.comment_id
        }
    )
    commentLike.save()
        .then(commentLike => res.status(201).json({ commentLike, log: 'Comment liké' }))
        .catch(error => res.status(400).json({ error : 'Comment non liké'}));
}

// Delete disliked post
exports.deleteCommentLike = (req, res) => {
    Models.Comment_like.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Comment like supprimé' }))
        .catch(error => res.status(400).json({ error : 'Comment like non supprimé'}));
}