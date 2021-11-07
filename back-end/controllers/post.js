const Models = require('../models');

// Select all users
exports.selectAllPosts = (req, res) => {
    Models.Post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json({ error : 'No ressource found' }));
}