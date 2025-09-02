const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { newUserValidation } = require('../utils/userValidations');

router.post('/register', newUserValidation, authController.signUp);
router.post('/login', authController.login);

module.exports = router;
