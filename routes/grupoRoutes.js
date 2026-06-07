const express = require('express');
const router = express.Router();

const grupoController = require('../controllers/grupoController');
const grupoDetalheController = require('../controllers/grupoDetalheController');

router.get('/', grupoController.index);

router.post('/', grupoController.criar);

router.get('/:id', grupoDetalheController.detalhe);

router.post('/:id/solicitar', grupoController.solicitarEntrada);

router.post('/:id/participantes', grupoController.adicionarParticipante);

router.post('/excluir/:id', grupoController.excluir);

module.exports = router;