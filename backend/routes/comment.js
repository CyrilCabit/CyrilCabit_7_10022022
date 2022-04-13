const express = require('express');
//ON CREE UN ROUTEUR EXPRESS QUI CONTIENDRA LES ROUTES ET QUE L'ON EXPORTERA DANS L'APPLICATION
const router = express.Router();


const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

//ajout de multer pour accepter le post de fichier
const multer = require('../middleware/multer-config');

//TOUTES LES ROUTES
router.get('/', auth, commentCtrl.getAllComments);
router.post('/', auth, multer, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getOneComment);
router.put('/:id', auth, multer, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);



module.exports = router;