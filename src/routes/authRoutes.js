const express = require('express');

const router = express.Router();

//const authController = require('../controllers/authController.js');
const authController = require('../controllers/authController.js');

router.get('/login',authController.login);
router.post('/login',authController.login);
router.get('/register',authController.register);
router.post('/register',authController.register);


module.exports = router;
