const { comment } = require('../app');
const db = require('../models/index');
const Comment = db.Comment
const Post = db.Post;
const User =db.User;

//VOIR UN COMMENTAIRE PRECIS
exports.getOneComment = (req, res, next) => {
    Comment.findOne({
        include: User,
        where: {
            id: req.params.id
        }
    }).then(
        (comment) => {
            res.status(200).json(comment);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
//VOIR TOUS LES COM 
exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        include: User,
        where: {
            id: req.params.PostId
        }

    }).then(
        (comment) => {
            res.status(200).json(comment);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};







// CREATE UN COMMENTAIRE (post)
exports.createComment = (req, res, next) => {
    // console.log(req.body);

    const comment = new Comment({
        ...req.body,
        UserId: req.auth.userId

    });
    comment.save()
        .then((data) => { User.findOne({
            where: {id: req.auth.userId}}) 
            .then((user)=> res.status(201).json({ message: "Votre commentaire a été publié" , comment: {...data.get({plain:true}), User:user }}) )
             })
        .catch(error => res.status(400).json({ error }));

};


// UPDATE UN POST (put)
exports.modifyComment = (req, res, next) => {
    console.log("REQUETE POINT BODY -----------------------------------------");
    console.log(req.body);
    const commentModified = req.file ? {
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body };

    Comment.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
        .then((comment) => {
            console.log("VOICI LE POST");
            console.log(comment);
            if (!comment) return res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce commentaire" })

            Comment.update(commentModified, { where: { id: req.params.id, UserId: req.auth.userId } })
            res.status(200).json({ message: 'Commentaire modifié !' })
        })
        .catch(error => res.status(400).json({ error }));




};

// DELETE UN COMMENTAIRE (delete)
exports.deleteComment = (req, res, next) => {

    Comment.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
        .then((commentToDelete) => {

            if (!commentToDelete) return res.status(401).json({ message: ` Le commentaire numéro ${req.params.id} est introuvable ou vous n'êtes pas autorisé à supprimer ce post` })

            Comment.destroy({ where: { id: req.params.id, UserId: req.auth.userId } })
            res.status(200).json({
                message: ` Le commentaire numéro ${req.params.id} a été supprimé !`
            })
        })
        .catch(error => res.status(400).json({ error }));


};