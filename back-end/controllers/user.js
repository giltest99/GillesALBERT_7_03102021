const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Création et vérification des tokens
const models = require('../models');




// Select all users
exports.selectAllUsers = (req, res) => {
    models.User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({error}));
}

// Select user by id
exports.selectUser = (req, res) => {
    models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
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


// Inscription de l'utilisateur

exports.signup = (req, res) => {
    // Select user by email
    models.User.findOne({
        where: { email: req.body.email }
    })
    .then((userExists) => {
        // If user exists
        if (userExists) {
            res.status(409).json({ error: "User already exists..."});
        }
        // Create new user
        else  {
            const avatar_url = './images/avatar/default_url';
            const default_biography = 'Quelques mots...';
            bcrypt.hash(req.body.password, 10)
                .then((hash) => {
                    models.User.create({
                        username: req.body.username,
                        password: hash,
                        email: req.body.email,                       
                        avatar: avatar_url,
                        biography: default_biography,                       
                        is_admin: false
                })
                .then((user) => {
                    res.status(201).json({ user })
                })
                .catch((error) => res.status(400).json({ error : 'Cannot create new user'}));
            });
        }      
    })
    .catch((error) => res.status(500).json({ error : 'Server error'}));
};


