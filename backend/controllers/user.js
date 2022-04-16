// BCRYPT PERMET LE HASH DU MOT DE PASSE USER
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');
const User = db.User
const Comment = db.Comment
const Post = db.Post



//CREATION NEW USER (BCRYPT)
exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                pseudo: req.body.pseudo,

            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));

};

//LOGIN POUR USER EXISTANT
exports.login = (req, res, next) => {
    console.log(req.body.email);
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    // console.log("-----------------------------------USER CONTROLLER------------------------------------");
                    // console.log(user);
                    //creation de token aléatoires
                    res.status(200).json({
                        userId: user.id,
                        pseudo: user.pseudo,
                        token: jwt.sign({ userId: user.id, isAdmin: user.pseudo == 'admin' },
                            process.env.TOKEN_USER, { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


// SUPPRESSION D'UN COMPTE
exports.deleteAccount = async (req, res ,next) => {
    const userId = req.auth.userId;


    await Comment.destroy({ where: {UserId: userId}})
    await Post.destroy({where:{UserId: userId}})
    await User.destroy({where:{id: userId}})

    return res.status(200).json({message: 'Le compte a été supprimé'})
}