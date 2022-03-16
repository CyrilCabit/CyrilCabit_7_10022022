const express = require('express');
//ON CREE UN ROUTEUR EXPRESS QUI CONTIENDRA LES ROUTES ET QUE L'ON EXPORTERA DANS L'APPLICATION
const router = express.Router();


const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

//ajout de multer pour accepter le post de fichier
const multer = require('../middleware/multer-config');

//TOUTES LES ROUTES
// router.get('/', auth, postCtrl.getAllPosts);
router.post('/', auth, multer, postCtrl.createPost);
// router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
// router.post('/:id/like', auth, postCtrl.likePost);


module.exports = router;