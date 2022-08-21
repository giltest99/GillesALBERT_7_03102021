const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Models = require("../models");

// Select all users
exports.selectAllUsers = (req, res) => {
  Models.User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((error) =>
      res.status(500).json({ error: "Pas de ressource disponible" })
    );
};

// Select user by id
exports.selectUserById = (req, res) => {
  Models.User.findOne({
    attributes: ["id", "username", "email", "avatar", "biography", "is_admin"],
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
      res.status(500).json({ error: "Pas de ressource disponible" });
    });
};

// Select user by email
exports.selectUserByUserName = (req, res) => {
  Models.User.findOne({
    attributes: ["id", "username", "email", "avatar", "biography", "is_admin"],
    where: { username: req.params.username },
  })
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "No ressource found" });
    });
};

// Select user by email
exports.selectUserByUserEmail = (req, res) => {
  Models.User.findOne({
    attributes: ["id", "username", "email", "avatar", "biography", "is_admin"],
    where: { email: req.params.email },
  })
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "No ressource found" });
    });
};

// Signup
exports.signup = (req, res) => {
  // Select user by email
  Models.User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      // If user exists
      if (user) {
        res.status(409).json({ message: "Utilisateur déjà existant" });
      } else {
        // Create new user
        const defaultAvatarUrl =
          "http://localhost:3000/images/default_avatar.jpg";
        const defaultBiography = "Quelques mots...";
        const defaultAccess = false;
        bcrypt.hash(req.body.password, 10).then((hash) => {
          Models.User.create({
            username: req.body.username, // username = firstName + ' ' + lastName -> firstName capitalize() & lastName toUpperCase()
            password: hash,
            email: req.body.email,
            avatar: defaultAvatarUrl,
            biography: defaultBiography,
            is_admin: defaultAccess,
          })
            .then((user) => {
              res.status(201).json({ message: "Utilisateur créé" });
            })
            .catch((error) =>
              res.status(400).json({ message: "Création impossible" })
            );
        });
      }
    })
    .catch((error) => res.status(500).json({ message: "Erreur serveur" }));
};

// Login
exports.login = (req, res) => {
  // Find user by email
  Models.User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      //console.log(user.dataValues);
      bcrypt
        .compare(req.body.password, user.password)
        .then((validPassword) => {
          if (!validPassword) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
          }
          res.status(200).json({
            /* userId: user.id,
                        username: user.username,
                        email: user.email,
                        isAdmin: user.is_admin,
                        avatar: user.avatar,
                        biography: user.biography, */
            // JWT
            token: jwt.sign({ userId: user.id }, "SECRET_TOKEN", {
              expiresIn: "24h",
            }),
            //message: 'Connexion réussie',
            userId: user.id,
            userName: user.username,
            isAdmin: user.is_admin,
          });
        })
        .catch((error) =>
          res.status(500).json({ message: "Problème d'identifiants" })
        );
    })
    .catch((error) =>
      res.status(500).json({ message: "Utilisateur non trouvé" })
    );
};

// Delete user
exports.deleteUser = (req, res) => {
  Models.User.findOne({
    attributes: ["id", "is_admin"],
    where: { id: req.params.id },
  })
    .then((user) => {
      console.log(user.dataValues);

      //console.log('Id', req.id);

      if (
        req.params.id == user.dataValues.id ||
        user.dataValues.is_admin == true
      ) {
        Models.User.destroy({
          where: { id: req.params.id },
        })
          .then(() => {
            res.status(201).json({ message: "User deleted" });
          })
          .catch((error) => res.status(404).json({ error: "Delete error" }));
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
    })
    .catch((error) => res.status(500).json({ error: "User not found" }));
};

// Update user
exports.updateUser = (req, res, next) => {
  const userObject =
    req.file &&
    req.body.avatar != "http://localhost:3000/images/default_avatar.jpg"
      ? // If avatar && != default_avatar
        {
          id: req.params.id,
          username: req.body.username,
          avatar: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
          biography: req.body.biography,
        }
      : // Default avatar
        {
          id: req.params.id,
          username: req.body.username,
          avatar: "http://localhost:3000/images/default_avatar.jpg",
          biography: req.body.biography,
        };

  //console.log(userObject);

  // Delete media from ./images when user media is modified
  if (req.file) {
    Models.User.findOne({
      attributes: [
        "id",
        "username",
        "email",
        "password",
        "avatar",
        "biography",
      ],
      where: { id: req.params.id },
    })
      .then((user) => {
        const filename = user.avatar.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Models.User.update(
            { ...userObject, id: req.params.id },
            { where: { id: req.params.id } }
          )
            .then(() => {
              res.status(200).json({ message: "User mis à jour!" });
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  } else {
    Models.User.update(
      { ...userObject, id: req.params.id },
      { where: { id: req.params.id } }
    )
      .then(() =>
        res.status(200).json({ ...userObject, message: "User modifié" })
      )
      .catch((error) => res.status(400).json({ error }));
  }
};
