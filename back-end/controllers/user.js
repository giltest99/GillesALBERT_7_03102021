const models = require('../models');




// Select all users
exports.selectAllUsers = (req, res) => {
    models.User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({error}));
}