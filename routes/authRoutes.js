const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.loginPage);

router.get('/cadastro', authController.cadastroPage);

router.post('/login', authController.login);

router.post('/cadastro', authController.cadastro);

router.get('/logout', authController.logout);

module.exports = router;