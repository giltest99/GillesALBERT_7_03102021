const Models = require('../models');
const fs = require('fs');


// Select all posts
exports.selectAllPosts = (req, res) => {
    Models.Post.findAll({
        attributes: ['id', 'user_id', 'title', 'content', 'attachment', 'createdAt']
    })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json({ error  }));
}

// Select post by id
exports.selectPostById = (req, res) => {
    Models.Post.findOne({
        attributes: ['id', 'user_id', 'title', 'content', 'attachment', 'createdAt', 'updatedAt'],
        where: { id: req.params.id }
    })
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ error: 'Post not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
}

// Create post
exports.createPost = (req, res) => {
    Models.Post.findOne({
        attributes: ['id', 'user_id', 'title', 'content'],
        where: { id: req.params.id }
    })
        .then(user => {
            Model.Post.create({
                userId: user.id,
                title: title,
                content: content,
                attachement: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            })
                .then()
                .catch()
        })
        .catch(error => {
            res.status(500).json({ error: 'Server error'});
        })
}
