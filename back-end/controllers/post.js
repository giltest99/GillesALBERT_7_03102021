const Models = require('../models');

// Select all users
exports.selectAllPosts = (req, res) => {
    Models.Post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json({ error : 'No ressource found' }));
}

// Select post by id
exports.selectPostById = (req, res) => {
    Models.Post.findOne({
        attributes: ['id', 'user_id', 'title', 'content'],
        where: { id: req.params.id }
    })
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ error: 'Post not found !' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
}