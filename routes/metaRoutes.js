const express = require('express');
const router = express.Router();

const metaController = require('../controllers/metaController');

router.get('/', metaController.index);

router.get('/nova', metaController.nova);

router.post('/nova', metaController.criar);

router.get('/excluir/:id', metaController.excluir);

module.exports = router;