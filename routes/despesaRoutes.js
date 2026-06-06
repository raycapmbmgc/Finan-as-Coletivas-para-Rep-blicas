const express = require('express');
const router = express.Router();

const despesaController = require('../controllers/despesaController');

router.get('/', despesaController.index);

router.get('/nova', despesaController.nova);

router.post('/nova', despesaController.criar);

router.get('/excluir/:id', despesaController.excluir);

module.exports = router;