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

// Create comment
exports.createComment = (req, res) => {

    const comment = new Models.Comment(
        {
            user_id: req.body.user_id,
            post_id : req.body.post_id,
            content: req.body.content
        }
    )
    comment.save()
        .then(comment => res.status(201).json({ comment, log: 'Comment créé' }))
        .catch(error => res.status(400).json({ error : 'Pas de comment enregistré'}));
}

// Delete comment
exports.deleteComment = (req, res) => {
    Models.Comment.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Comment supprimé' }))
        .catch(error => res.status(400).json({ error : 'Comment non supprimé'}));
}

// Update comment
exports.updateComment = (req, res) => {
    Models.Comment.update({ ...req.body }, { where: { id: req.params.id }})
        .then(() => res.status(200).json({ ...req.body, message: "Commentaire modifié" }))
        .catch(error => res.status(400).json({ error }));
}