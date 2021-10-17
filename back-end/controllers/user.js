const models = require('../models');




// Select all users
exports.selectAllUsers = (req, res) => {
    models.User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({error}));
}

// Select one user by id
exports.selectUser = (req, res) => {
    models.User.findOne({
        attributes: ['id','username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { id: req.params.id },
    })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: "Utilisateur non trouvé" });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: "Impossible de voir le profil" });
        });
};

// Add user
