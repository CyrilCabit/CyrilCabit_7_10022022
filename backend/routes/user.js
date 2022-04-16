const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

//CREATION NEW USER OU LOGIN D'UN USER EXISTANT
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/me', auth, userCtrl.deleteAccount); /*route pour la suppression du compte*/


module.exports = router;