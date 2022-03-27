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
    let media;
    console.log('Req body : ', req.file);
    if (req.file) { 
        media = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    }
    else {
        media = '';
    }
    const post = new Models.Post(
        {
            user_id: req.body.user_id,
            title: req.body.title,
            content: req.body.content,
            attachment: media
        }
    )
    post.save()
        .then(post => res.status(201).json({ post, log: 'Post créé' }))
        .catch(error => res.status(400).json({ error : 'Pas de post enregistré'}));
}

// Delete post
exports.deletePost = (req, res) => {
    
    /* 
    -> Simple delete sans suppression attachment
    Models.Post.destroy({ where: { id: req.params.id }})
        .then(() => res.status(200).json({ log: 'Message supprimé' }))
        .catch(error => res.status(400).json({ error : 'Post non supprimé'})); 
    */

        Models.Post.findOne({
            attributes: ['id','attachment'],
            where: { id: req.params.id }
        })
            .then((post) => {
                if (post) {
                    const filename = post.attachment.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        Models.Post.destroy({ where: { id: req.params.id }})
                            .then(() => res.status(200).json({ log: 'Message supprimé' }))
                            .catch(error => res.status(400).json({ error : 'Post non supprimé'}));
                    })
                } else {
                    res.status(404).json({ error: 'Post not found' });
                }
            })
            .catch((error) => {
                res.status(500).json({ error: 'No ressource found' });
            });
        
}

// Update post
exports.updatePost = (req, res, next) => {

    /* 
    -> Update sauce sans suppression image si modif
    Models.Post.update({ ...postObject, id:  req.params.id}, { where: { id: req.params.id }})
        .then(() => res.status(200).json({ ...postObject, message: 'Message modifié' }))
        .catch(error => res.status(400).json({ error })); 
    */

    const postObject = req.file ?
      {
        ...req.body.post,
        attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      } : 
      { ...req.body }

    

    if (req.file){
        Models.Post.findOne({
            attributes: ['id', 'user_id', 'title', 'content', 'attachment'],
            where: { id: req.params.id }
        })
        .then((post) => {
            const filename = post.attachment.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Models.Post.update({ ...postObject, id:  req.params.id}, { where: { id: req.params.id }})
            .then(() => res.status(200).json({ ...postObject, message: 'Message modifié' }))
            .catch(error => res.status(400).json({ error }));
            })
        })
        .catch((error) => { res.status(500).json({ error }); 
      });
    }

    else {
        Models.Post.update({ id: req.params.id }, { ...postObject, id: req.params.id })
          .then(() => res.status(200).json({ message: 'Image mise à jour!' }))
          .catch((error) => res.status(400).json({ error }));
      }
    
}
