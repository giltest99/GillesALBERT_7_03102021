const Models = require('../models');

// Select all comments
exports.selectAllComments = (req, res) => {
    Models.Comment.findAll({
        attributes: ['id', 'user_id', 'post_id', 'content']
    })
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(500).json({ error : 'No ressource found' }));
}

// Select comment by id
exports.selectCommentById = (req, res) => {
    Models.Comment.findOne({
        attributes: ['id', 'user_id', 'post_id', 'content'],
        where: { id: req.params.id }
    })
        .then((comment) => {
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ error: 'Comment not found !' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
}