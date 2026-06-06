const express = require('express');
const router = express.Router();

const grupoController = require('../controllers/grupoController');

router.get('/', grupoController.index);

router.get('/novo', grupoController.novo);

router.post('/novo', grupoController.criar);

router.get('/excluir/:id', grupoController.excluir);

module.exports = router;