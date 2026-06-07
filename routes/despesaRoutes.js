const express = require('express');
const router = express.Router();
const despesaController = require('../controllers/despesaController');

router.get('/', despesaController.index);

router.post('/', despesaController.criar);

router.get('/excluir/:id', despesaController.excluir);

module.exports = router;