const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Models = require('../models');

// Select all users
exports.selectAllUsers = (req, res) => {
    Models.User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({ error : 'Pas de ressource disponible' }));
}

// Select user by id
exports.selectUserById = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { id: req.params.id }
    })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'Pas de ressource disponible' });
        });
}

// Select user by email
exports.selectUserByUserName = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { username: req.params.username }
    })
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
}

// Select user by email
exports.selectUserByUserEmail = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { email: req.params.email }
    })
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'No ressource found' });
        });
}

// Signup
exports.signup = (req, res) => {
    // Select user by email
    Models.User.findOne({
        where: { email: req.body.email }
    })
        .then(user => {
            // If user exists
            if (user) {
                res.status(409).json({ error: "Utilisateur déjà existant"});
            }
            else {
                // Create new user
                const defaultAvatarUrl = '../images/default_avatar.jpg';
                const defaultBiography = 'Quelques mots...';
                const defaultAccess = false;
                bcrypt.hash(req.body.password, 10)
                    .then((hash) => {
                        Models.User.create({
                            username: req.body.username, // username = firstName + ' ' + lastName -> firstName capitalize() & lastName toUpperCase()
                            password: hash,
                            email: req.body.email,                       
                            avatar: defaultAvatarUrl,
                            biography: defaultBiography,                       
                            is_admin: defaultAccess
                    })
                    .then((user) => {
                        res.status(201).json({ user })
                    })
                    .catch((error) => res.status(400).json({ error : 'Création impossible'}));
                });
            }            
        })
        .catch((error) => res.status(500).json({ error : 'Server error'}));
}

// Login
exports.login = (req, res) => {
    // Find user by email
    Models.User.findOne({
        where: { email: req.body.email }
    })
        .then(user => {
            //console.log(user.dataValues);
            bcrypt.compare(req.body.password, user.password) 
            .then(validPassword => {
                if (!validPassword) {
                    return res.status(401).json({ error: 'Mot de passe invalide' });
                }
                res.status(200).json({
                    userId: user.id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.is_admin,
                    avatar: user.avatar,
                    biography: user.biography,
                    // JWT
                    token: jwt.sign(
                        { userId: user.id }, 
                        'SECRET_TOKEN',
                        { expiresIn: '24h' } 
                    )                 
                });
            })
            .catch(error => res.status(500).json({ error: 'Problème d\'identifiants' }));
                        
        })
        .catch(error => res.status(500).json({ error : 'Utilisateur non trouvé'}));
}

// Delete user
exports.deleteUser = (req, res) => {
    Models.User.findOne({
        where: { id: req.params.id }
    })
        .then(user => {
            console.log(user.dataValues);
            //console.log('Id', req.id);
            if(req.params.id == user.dataValues.id || req.params.is_admin == true){
                Models.User.destroy({
                    where: { id: req.params.id}
                })
                    .then(() => {
                        res.status(201).json({ message: 'User deleted' })
                    })
                    .catch(error => res.status(404).json({ error: 'Delete error' }));
            }
            else {
                res.status(403).json({error: 'Forbidden'});
            }
        })
        .catch((error) => res.status(500).json({ error: "User not found" }));
}