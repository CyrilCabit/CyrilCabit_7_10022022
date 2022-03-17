const { comment } = require('../app');
const db = require('../models/index');
const Comment = db.Comment

// //VOIR UN POST PRECIS
// exports.getOnePost = (req, res, next) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(
//         (post) => {
//             res.status(200).json(post);
//         }
//     ).catch(
//         (error) => {
//             res.status(404).json({
//                 error: error
//             });
//         }
//     );
// };
// //VOIR TOUS LES COM 
// exports.getAllPosts = (req, res, next) => {
//     Post.findAll({

//     }).then(
//         (post) => {
//             res.status(200).json(post);
//         }
//     ).catch(
//         (error) => {
//             res.status(404).json({
//                 error: error
//             });
//         }
//     );
// };







// CREATE UN POST (post)
exports.createComment = (req, res, next) => {
    console.log(req.body);
    if (req.file) {
        const comment = new Comment({
            ...req.body,

            //configuration de multer dans la route pour la gestion des images
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        });
        // console.log(req.body);
        // console.log(req.file);
        comment.save()
            .then(() => res.status(201).json({ message: "Votre commentaire et l'image ont été publiés" }))
            .catch(error => res.status(400).json({ error }));
    } else {
        const comment = new Comment({
            ...req.body,

        });
        comment.save()
            .then(() => res.status(201).json({ message: "Votre commentaire a été publié" }))
            .catch(error => res.status(400).json({ error }));
    }
};


// // UPDATE UN POST (put)
// exports.modifyComment = (req, res, next) => {
//     console.log("REQUETE POINT BODY -----------------------------------------");
//     console.log(req.body);
//     const commentModified = req.file ? {
//         ...req.body,
//         image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     } : {...req.body };

//     Comment.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
//         .then((comment) => {
//             console.log("VOICI LE POST");
//             console.log(comment);
//             if (!comment) return res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce commentaire" })

//             Comment.update(commentModified, { where: { id: req.params.id, UserId: req.auth.userId } })
//             res.status(200).json({ message: 'Commentaire modifié !' })
//         })
//         .catch(error => res.status(400).json({ error }));

//     // res.send("Le post a bien été modifié");


// };

// // DELETE UN POST (delete)
// exports.deleteComment = (req, res, next) => {

//     Comment.findOne({ where: { id: req.params.id, UserId: req.auth.userId } })
//         .then((commentToDelete) => {

//             if (!commentToDelete) return res.status(401).json({ message: ` Le Commentaire numéro ${req.params.id} est introuvable ou vous n'êtes pas autorisé à supprimer ce post` })

//             Comment.destroy({ where: { id: req.params.id, UserId: req.auth.userId } })
//             res.status(200).json({
//                 message: ` Le Commentaire numéro ${req.params.id} a été supprimé !`
//             })
//         })
//         .catch(error => res.status(400).json({ error }));


// };