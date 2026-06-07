const express = require('express');
const router = express.Router();

const metaController = require('../controllers/metaController');
const financeiroController = require('../controllers/financeiroController');

// 🔥 página principal
router.get('/', (req, res) => {
    res.redirect('/metas/1');
});

router.get('/:id', metaController.index);

// 💰 financeiro
router.post('/:id/entrada', financeiroController.entrada);
router.post('/:id/saida', financeiroController.saida);

// 🎯 metas
router.post('/:id/meta', metaController.criarMeta);
router.get('/:id/meta/excluir/:metaId', metaController.excluirMeta);

module.exports = router;