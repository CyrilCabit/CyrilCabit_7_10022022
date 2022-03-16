const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//CREATION NEW USER OU LOGIN D'UN USER EXISTANT
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;