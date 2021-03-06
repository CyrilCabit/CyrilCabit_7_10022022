const { post } = require('../app');
const db = require('../models/index');
const Comment = db.Comment;
const Post = db.Post;
const User =db.User;
const fs = require('fs');


//VOIR UN POST PRECIS
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        include: [{model: User}, {model: Comment, include: User, separate: true, order:[["updatedAt","DESC"]]}],
  
        where: {
            id: req.params.id
        }
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
//VOIR TOUS LES POSTS 
exports.getAllPosts = (req, res, next) => {
    Post.findAll({  
        include: {model: User},
        order:[["updatedAt","DESC"]]

    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
    
};



// CREATE UN POST (post)
exports.createPost = (req, res, next) => {
    if (req.file) {
        const post = new Post({
            ...req.body,
            UserId: req.auth.userId,
            //configuration de multer dans la route pour la gestion des images
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        });
        // console.log(req.body);
        // console.log(req.file);
        post.save()
            .then((data) => { User.findOne(
                {
                    where: {
                        id: req.auth.userId
                    }
                }
            )
            .then((user)=>res.status(201).json({ message: "Le post et l'image ont été envoyés", post:{...data.get({plain:true}), User:user} }))
            
            })
            .catch(error => res.status(400).json({ error }));
    } else {
        const post = new Post({
            ...req.body,
            UserId: req.auth.userId
        });
        post.save()
            .then((data) => { User.findOne(
                {
                    where: {
                        id: req.auth.userId
                    }
                }
            )
            .then((user)=>res.status(201).json({ message: "Le post a été envoyé", post:{...data.get({plain: true}), User:user }}))
            })
            .catch(error => res.status(400).json({ error }));
    }
};


// UPDATE UN POST (put)
exports.modifyPost = (req, res, next) => {
    console.log("REQUETE POINT BODY -----------------------------------------");
    console.log(req.body);
    const postModified = req.file ? {
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body };

    Post.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
        .then((post) => {
            console.log("VOICI LE POST");
            console.log(post);
            if (!post) return res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce post" })

            Post.update(postModified, { where: { id: req.params.id, UserId: req.auth.userId } })
            res.status(200).json({ message: 'Post modifié !' })
        })
        .catch(error => res.status(400).json({ error }));

    // res.send("Le post a bien été modifié");


};

// DELETE UN POST (delete)
exports.deletePost = (req, res, next) => {

    if (req.auth.isAdmin){

        Post.findOne({ where: { id: req.params.id } })
        .then((postToDelete) => {
            console.log(postToDelete);
            if (!postToDelete) return res.status(401).json({ message: ` Le Post numéro ${req.params.id} est introuvable ou vous n'êtes pas autorisé à supprimer ce post` })
            Comment.destroy({where: {PostId: req.params.id }})
            .then(()=>{if (postToDelete.image) {
                const filename = postToDelete.image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({ where: { id: req.params.id } })
                    res.status(200).json({ message: ` Le Post numéro ${req.params.id} et l'image ont été supprimés !` })
                })

            } else {
                Post.destroy({ where: { id: req.params.id } })
                res.status(200).json({
                    message: ` Le Post numéro ${req.params.id} a été supprimé !`
                })

            }})
            

        })
    }

    else{
        Post.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
        .then((postToDelete) => {
            console.log(postToDelete);
            if (!postToDelete) return res.status(401).json({ message: ` Le Post numéro ${req.params.id} est introuvable ou vous n'êtes pas autorisé à supprimer ce post` })
            Comment.destroy({where: {PostId: req.params.id }})
            .then(()=>{if (postToDelete.image) {
                const filename = postToDelete.image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({ where: { id: req.params.id, UserId: req.auth.userId } })
                    res.status(200).json({ message: ` Le Post numéro ${req.params.id} et l'image ont été supprimés !` })
                })

            } else {
                Post.destroy({ where: { id: req.params.id, UserId: req.auth.userId } })
                res.status(200).json({
                    message: ` Le Post numéro ${req.params.id} a été supprimé !`
                })

            }})
            

        })

    }

    



};