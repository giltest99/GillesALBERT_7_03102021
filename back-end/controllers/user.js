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
        where: { id: req.params.id }
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
}

// Select user by email
exports.selectUserByUserName = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { username: req.params.username }
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
}

// Select user by email
exports.selectUserByUserEmail = (req, res) => {
    Models.User.findOne({
        attributes: ['id', 'username', 'email', 'avatar', 'biography', 'is_admin'],
        where: { email: req.params.email }
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
}

// Signup
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
            const defaultAvatarUrl = './images/avatar/default_url';
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
                .catch((error) => res.status(400).json({ error : 'Cannot create new user'}));
            });   
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
            console.log(user);
            if (!user) {
                return res.status(401).json({ error: 'User not found' });
            }
            bcrypt.compare(req.body.password, user.password) 
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Invalid password' });
                    }
                    res.status(200).json({
                        user_id: user.id,
                        username: user.username,
                        email: user.email,
                        is_admin: user.is_admin,
                        avatar: user.avatar,
                        biography: user.biography,
                        // JWT token
                        token: jwt.sign(
                            { userId: user_id }, 
                            'SECRET_TOKEN',
                            { expiresIn: '24h' } 
                        )                    
                    });
                })
                .catch(error => res.status(500).json({ error: 'Cannot log' }));            
        })
        .catch(error => res.status(500).json({ error }));
}

// Delete user
exports.deleteUser = (req, res) => {
    Models.User.findOne({
        attributes: ['is_admin'],
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