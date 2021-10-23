const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Models = require('../models');



// Select all users
exports.selectAllUsers = (req, res) => {
    Models.User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({ error : 'No ressource found' }));
}

// Select user by id
exports.selectUserById = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { id: req.params.id },
    })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
};

// Select user by email
exports.selectUserByUserName = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { username: req.params.username },
    })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
};

// Select user by email
exports.selectUserByUserEmail = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { email: req.params.email },
    })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
};


// Inscription de l'utilisateur
exports.signup = (req, res) => {
    // Select user by email
    Models.User.findOne({
        where: { email: req.body.email }
    })
    .then((userExists) => {
        // If user exists
        if (userExists) {
            res.status(409).json({ error: "User already exists..."});
        }
        // Create new user
        else  {
            // Default values
            const defaultAvatarUrl = './images/avatar/default_url';
            const defaultBiography = 'Quelques mots...';
            const defaultAccess = false;
            bcrypt.hash(req.body.password, 10)
                .then((hash) => {
                    Models.User.create({
                        username: req.body.username, // username = firstName + ' ' + lastName (firstName capitalize() & lastName toUpperCase())
                        password: hash,
                        email: req.body.email,                       
                        avatar: defaultAvatarUrl,
                        biography: defaultBiography,                       
                        is_admin: defaultAccess
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


